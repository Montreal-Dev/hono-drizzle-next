import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
import v1 from "./v1/v1";
import { logger } from "hono/logger";

const corsSettingsDev = {
  origin: ['*'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization'],
  // credentials: true, // If using cookies or Authorization headers
};

export const app = new Hono()
.use("*", cors(corsSettingsDev))
.use(logger())
.route("/", v1);

const port = 3001;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
