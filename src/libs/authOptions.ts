import NextAuth, { AuthOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import bcrypt from "bcrypt"
import clientPromise from "./mongoClients";
import db from "./db";
import { User } from "@/models/User";


export const authOptions: NextAuthOptions = {
    adapter: MongoDBAdapter(clientPromise)  as any,
    providers: [
      GoogleProvider({
        clientId: process.env.CLIENT_ID as string,
        clientSecret: process.env.CLIENT_SECRET as string,
      }),
      CredentialsProvider({
        name: "Credentials",
        id: "credentials",
        credentials: {  },
        async authorize(credentials, req) {
          const { email, password } = credentials as {
            email: string ,
              password: string;
          };
  
          db.connect();
          
          try { 
            const user = await User.findOne({ email });
            if (!user) {
              return null;
            }
            const passwordsMatch = await bcrypt.compare(
              password,
              user.password
            );
            if (!passwordsMatch) {
              return null;
            }
            return user;
          } catch (error) {
            console.log("Error:", error);
          }
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    
    callbacks: {
      async signIn({ user, account }: { user: any; account: any }) {
        if (account.provider === "google") {
          try {
            const { name, email } = user;
            await db.connect();
            const ifUserExists = await User.findOne({ email });
            if (ifUserExists) {
              return user;
            }
            const newUser = new User({
              name: name,
              email: email,
            });
            const res = await newUser.save();
            if (res.status === 200 || res.status === 201) {
              console.log(res)
              return user;
            }
            
          } catch (err) {
            console.log(err);
          }
        }
        return user;
      },
      async jwt({ token,user }: {  token:any,user:any }) {
        if (user) {
          token.email = user.email;
          token.name = user.name;
          token.role = user.role;
          token._id = user._id;
        }
        return token;
      },
      
      async session({ session, token }: { session: any; token: any }) {
        if (session.user) {
          session.user.email = token.email;
          session.user.name = token.name;
          session.user.role = token.role;
          session.user._id = token._id;
        }
        return session;
      },
    },
    pages: {
      signIn: "/",
    },
    secret: process.env.NEXT_SECRET,
  };