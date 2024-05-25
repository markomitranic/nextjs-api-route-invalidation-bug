import { NextResponse } from "next/server";
import {unstable_cache} from "next/cache";

export const revalidate = 60;

// @see http://localhost:3000/api/currentTimeTagged
export async function GET() {
  const currentTime = await unstable_cache(async () => new Date().toISOString().slice(11, 19), ["currentTimeTag"], {tags: ["currentTimeTag"]})();
  return NextResponse.json({ currentTime });
}
