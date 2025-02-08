import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Test from "@/models/Test"; // Ensure this is the correct import

export async function GET() {
  try {
    await dbConnect();

    const tests = await Test.find(); // Fetch all tests
    console.log("Fetched Tests from DB:", tests); // Log to debug

    if (!tests.length) {
      return NextResponse.json({ error: "No test found" }, { status: 404 });
    }

    return NextResponse.json(tests[0]); // Send the first test
  } catch (error) {
    console.error("Error fetching test:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
