import {Order} from "@/models/Order";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";

import { authOptions } from "@/libs/authOptions";
import db from "@/libs/db";

export async function GET(req:Request) {
  db.connect()

  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email;
  const admin:any = session?.user

  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  if (_id) {
    return Response.json( await Order.findById(_id) );
  }


  if (admin) {
    return Response.json( await Order.find() );
  }

  if (userEmail) {
    return Response.json( await Order.find({userEmail}) );
  }

}