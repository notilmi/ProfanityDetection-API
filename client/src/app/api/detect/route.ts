import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
export const POST = async (req: NextRequest, res: NextResponse) => {
  const { message }: { message: string } = await req.json();
  console.log("Processing Message", message);

  try {
    const { data } = await axios.post(
      `${process.env.API_ENDPOINT}/detect`,
      {
        message: message,
      },
      {
        headers: {
          Authorization: process.env.API_KEY,
        },
      }
    );

    console.log("Data", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error Caught", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
