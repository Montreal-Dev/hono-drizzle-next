import { Hono, type Env } from "hono";

export interface V1Bindings extends Env {
  Variables: {
    // user?: User;
  };
}

export function createV1Router() {
  return new Hono<V1Bindings>({
    strict: false,
  });
}

export default function createV1App() {
  const v1 = createV1Router();
  return v1;
}
