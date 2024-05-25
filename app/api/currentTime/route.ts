import { NextResponse } from "next/server";

export const revalidate = 60;

// @see http://localhost:3000/api/currentTime
export function GET() {
  const currentTime = new Date().toISOString().slice(11, 19);
  return NextResponse.json({ currentTime });
}
