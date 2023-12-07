import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {User} from "@/models/User";
import db from "@/libs/db";
import {getServerSession} from "next-auth";

export async function PUT(req:Request) {
  const data = await req.json();
  const {_id, name, image, ...otherUserInfo} = data;
  
  let filter = {};
  if (_id) {
    filter = {_id};
  } else {
    const session:any = await getServerSession(authOptions);
    const email = session.user.email;
    filter = {email};
  }
  db.connect()

  const user = await User.findOne(filter);
  await User.updateOne(filter, {name, image});

  return Response.json(true);
}

export async function GET(req:Request) {
  db.connect();

  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');

  let filterUser = {};
  if (_id) {
    filterUser = {_id};
  } else {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email;
    if (!email) {
      return Response.json({});
    }
    filterUser = {email};
  }

  const user = await User.findOne(filterUser).lean();
  const userInfo = await UserInfo.findOne({email:user.email}).lean();

  return Response.json({...user, ...userInfo});

}