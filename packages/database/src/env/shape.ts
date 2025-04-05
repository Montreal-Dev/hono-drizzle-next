import { z } from "zod";

export const DatabaseEnvSchema = z.object({
  NODE_ENV: z.string().min(1),
  DATABASE_URL: z.string().min(1),
  DATABASE_USER: z.string().min(1),
  DATABASE_NAME: z.string().min(1),
  DATABASE_HOST: z.string().min(1),
  DATABASE_PASSWORD: z.string().min(1),
});

export type DatabaseEnv = z.infer<typeof DatabaseEnvSchema>;

export type DatabaseEnvError = z.ZodError<DatabaseEnv>;
