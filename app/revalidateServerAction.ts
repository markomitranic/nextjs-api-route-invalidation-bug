"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidateServerAction() {
  revalidatePath("/api/currentTime");

  revalidateTag("currentTimeTag");
  revalidatePath("/api/currentTimeTagged");

  revalidateTag("currentTimeFetchTag");
  revalidatePath("/api/currentTimeFetch");

  revalidateTag("currentTimeFetchTagDynamic");
  revalidatePath("/api/currentTimeFetchDynamic");
}