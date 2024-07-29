import Offer from "@/libs/models/Offer";
import { connectMongoDB } from "@/libs/MongoConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await connectMongoDB();
    const data = await Offer.find();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { msg: "Error while fetching offers" },
      { status: 400 }
    );
  }
}
