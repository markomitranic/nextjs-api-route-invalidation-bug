import {revalidatePath, revalidateTag} from "next/cache";

// Never cache this API.
export const dynamic = "force-dynamic";

// @see http://localhost:3000/api/revalidateApiResponse
export async function GET() {
  revalidatePath("/api/currentTime");

  revalidateTag("currentTimeTag");
  revalidatePath("/api/currentTimeTagged");

  revalidateTag("currentTimeFetchTag");
  revalidatePath("/api/currentTimeFetch");

  revalidateTag("currentTimeFetchTagDynamic");
  revalidatePath("/api/currentTimeFetchDynamic");

  const currentTime = new Date().toISOString().slice(11, 19);
  return new Response(`API response is revalidated! ${currentTime}`, {
    status: 200,
  });
}
