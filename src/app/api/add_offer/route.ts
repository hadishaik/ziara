import Offer from "@/libs/models/Offer";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: Response) {
  try {
    const body = await req.json();
    const { name, discount, imgSrc, expireTime } = body;
    await connectMongoDB();
    console.log(name, discount, imgSrc, expireTime);
    const data = await Offer.create({
      name,
      discount,
      imgSrc,
      expireTime,
    });

    return NextResponse.json({ msg: "Successfully offer added", data });
  } catch {
    return NextResponse.json(
      { msg: "Error while adding offer" },
      { status: 400 }
    );
  }
}
