import {
    hc as honoClient,
    type InferRequestType,
    type InferResponseType,
  } from "hono/client";
  import type { app } from "./api";
  
  // assign the client to a variable to calculate the type when compiling
  const client = honoClient<typeof app>("");
  export type Client = typeof client;
  
  // export compiled client
  export const hc = (...args: Parameters<typeof honoClient>): Client =>
    honoClient<typeof app>(...args);
  export type HcResponse<T> = InferResponseType<T>;
  export type HcRequest<T> = InferRequestType<T>;
  