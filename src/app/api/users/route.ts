import db from "@/libs/db";
import {User} from "@/models/User";
import mongoose from "mongoose";

export async function GET() {
  db.connect()
  try {
    
    const users = await User.find();
    return Response.json(users);
  } catch (error) {
    return Response.json([]);   
  }
  // }
}