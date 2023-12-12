// import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
import db from "@/libs/db";
import { MenuItem } from "@/models/MenuItem";

export async function POST(req: Request) {
  db.connect();
  const data = await req.json();

  const menuItemDoc = await MenuItem.create(data);
  return Response.json(menuItemDoc);
}

export async function PUT(req: Request) {
  db.connect();

  const { _id, ...data } = await req.json();
  await MenuItem.findByIdAndUpdate(_id, data);
  return Response.json(true);
}

export async function GET() {
  db.connect();
  return Response.json(await MenuItem.find());
}

export async function DELETE(req: Request) {
  db.connect();
  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");
  await MenuItem.deleteOne({ _id });
  return Response.json(true);
}
