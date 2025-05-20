import { expand } from "dotenv-expand";
import { config } from "dotenv";
import {
  type DatabaseEnv,
  type DatabaseEnvError,
  DatabaseEnvSchema,
} from "./shape";

expand(config({ path: "./.env.dev" }));

let env: DatabaseEnv;
try {
  env = DatabaseEnvSchema.parse(process.env);
  console.log("✔️ DEVELOPMENT .env.dev LOADED", env.NODE_ENV);
} catch (e) {
  const error = e as DatabaseEnvError;
  console.error(`❌ Invalid development environment variables:`);
  console.error(error.flatten().fieldErrors);
  process.exit(1);
}

export default env;
