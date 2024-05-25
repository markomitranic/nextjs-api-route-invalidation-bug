import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// @see http://localhost:3000/api/currentTimeFetchDynamic
export async function GET() {
  const currentTimeResponse = await fetch("http://worldtimeapi.org/api/timezone/Europe/Copenhagen", {
    next: { tags: ["currentTimeFetchTagDynamic"], revalidate: 60 },
  });
  const currentTime = (await currentTimeResponse.json() as {datetime: string}).datetime.slice(11, 19);

  return NextResponse.json({ currentTime });
}
