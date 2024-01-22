// import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
import db from "@/libs/db";
import {Category} from "@/models/Category";


export async function POST(req:Request) {
  db.connect(); 
  const {name} = await req.json();
  
  
  try {
    const categoryDoc = await Category.create({name});
    return Response.json(categoryDoc);
    
  } catch (error) {
    console.log(error); 
  }
 
}

export async function PUT(req:Request) {
  db.connect();
  const {_id, name} = await req.json();
   const updatedCategory  = await Category.updateOne({_id}, {name});
  return Response.json(updatedCategory);
}

export async function GET() {
  db.connect(); 
  return Response.json(
    await Category.find()
  );
}

export async function DELETE(req:Request) {
  db.connect(); 
  const url = new URL(req.url);
  const _id = url.searchParams.get('_id');
  await Category.deleteOne({_id});
  return Response.json(true);
}