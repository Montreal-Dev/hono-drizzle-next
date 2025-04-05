import type { Config } from "drizzle-kit";
import env from "./src/env/env.studio";


export default {
  schema: "./src/schemas/ex_schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config;
