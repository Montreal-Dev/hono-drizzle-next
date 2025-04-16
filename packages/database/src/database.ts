import { drizzle } from "drizzle-orm/node-postgres";
import * as schema1 from "./schemas/schema1";
import * as schema2 from "./schemas/schema2";
import env from "./env/env.studio";

export const db = drizzle(env.DATABASE_URL!, {schema: { ...schema1, ...schema2 }});

export default db;
