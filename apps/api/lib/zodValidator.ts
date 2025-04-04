import type { Context } from "hono";
import { Status } from "./statusCode";

export const zodValidatorError = (result: any, c: Context) => {
  if (!result.success) {
    return c.json(
      {
        success: false,
        error: result.error.flatten().fieldErrors,
      },
      Status.UNPROCESSABLE_ENTITY,
    );
  }
};
