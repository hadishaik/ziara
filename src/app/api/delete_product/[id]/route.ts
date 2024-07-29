import { connectMongoDB } from "@/libs/MongoConnect";
import Product from "@/libs/models/Product";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, URLParams: any) {
  try {
    const id = URLParams.params.id;
    console.log(id, "iam idd");
    await connectMongoDB();

    const data = await Product.findByIdAndDelete(id);
    return NextResponse.json({ msg: "Updated Successfully", data });
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
