import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  await connectMongoDB();
  const data = await Product.findById(id);
  return NextResponse.json(data, { status: 200 });
}
