import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === "admin@admin" && password === "admin") {
    return NextResponse.json({ message: "Login success" }, { status: 200 });
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
