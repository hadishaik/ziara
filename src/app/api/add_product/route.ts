import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { imgSrc, filekey, name, category, price, description, tags } = body;
    await connectMongoDB();
    const data = await Product.create({
      imgSrc,
      filekey,
      name,
      category,
      price,
      description,
      tags,
    });
    return NextResponse.json(
      { msg: "Product added successfully", data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error,
        msg: "Internal server error",
      },
      { status: 400 }
    );
  }
}
