import db from "@/libs/db";
import { MenuItem } from "@/models/MenuItem";
import Error from "next/error";

export async function POST(req: Request) {
  db.connect();
  const data = await req.json();

  try {
    const menuItemDoc = await new MenuItem(data);
  await menuItemDoc.save();
  return Response.json(menuItemDoc);
    
  } catch (error:any) {
   console.log(error.message);
    return Response.json(error.message)
  }

}

export async function PUT(req: Request) {
  db.connect();

  const { _id, ...data } = await req.json();
  await MenuItem.findByIdAndUpdate(_id, data);
  return Response.json(true);
}

export async function GET() {
  db.connect();
  try {
    const menu = await MenuItem.find()
    return Response.json(menu);
  } catch (error) {
    
  }
}

export async function DELETE(req: Request) {
  db.connect();
  const url = new URL(req.url);
  const _id = url.searchParams.get("_id");
  await MenuItem.deleteOne({ _id });
  return Response.json(true);
}
