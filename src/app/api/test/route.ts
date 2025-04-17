import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    console.log(body);
    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return NextResponse.json(
      { error: "Invalid JSON payload" },
      { status: 400 }
    );
  }
}

export async function GET(request: Request) {
  console.info("Hello, world!");
  return NextResponse.json({ message: "ok", status: 200 });
}
