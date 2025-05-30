"use server";

import { hc } from "api/hcx";

export const apiClient: ReturnType<typeof hc> = await hc(
  process.env.NEXT_PUBLIC_API_ENDPOINT || "",
);

export type ApiClient = typeof apiClient;
