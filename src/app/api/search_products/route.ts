import Product from "@/libs/models/Product";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const { freeText } = body;
  try {
    await connectMongoDB();
    const data = await Product.find({
      $or: [
        { name: { $regex: freeText, $options: "i" } },
        { category: { $regex: freeText, $options: "i" } },
      ],
    });
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Server error" }, { status: 400 });
  }
}
