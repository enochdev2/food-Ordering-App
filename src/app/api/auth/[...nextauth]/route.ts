import clientPromise from "@/libs/mongoClients";
import bcrypt from "bcrypt";
import * as mongoose from "mongoose";
import { User } from "@/models/User";
import NextAuth, { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import db from "@/libs/db";

export const authOptions: any = {
  secret: process.env.NEXT_SECRET,
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        username: {
          label: "Email",
          type: "email",
          placeholder: "test@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: {email:string,password:string}, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        db.connect();
        const user = await User.findOne({ email });
        const passwordOk = user && bcrypt.compareSync(password, user.password);
        
       
        
        return user;
      },
    }),
  ],
  
  async session({session,}){
    if(token){
        session.user._id = token._id
        session.user.accessToken = token.accessToken
    }
  
    return session
  }  
};


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
