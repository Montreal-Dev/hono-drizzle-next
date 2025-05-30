import type { Config } from "drizzle-kit";
import env from "./src/env/env.dev";

export default {
  schema: "./src/schemas/*",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config;
