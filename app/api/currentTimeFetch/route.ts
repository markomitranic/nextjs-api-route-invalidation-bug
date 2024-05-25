import { NextResponse } from "next/server";

export const revalidate = 60;

// @see http://localhost:3000/api/currentTimeFetch
export async function GET() {
  const currentTimeResponse = await fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen", {
    next: { tags: ["currentTimeFetchTag"] },
  });
  const currentTime = (await currentTimeResponse.json() as {datetime: string}).datetime.slice(11, 19);

  return NextResponse.json({ currentTime });
}
