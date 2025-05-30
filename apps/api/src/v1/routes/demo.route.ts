import db from "database/db";
import { Status } from "../../../lib/statusCode";
import createV1App from "../createApp";
import { demoTable1 } from "database/schemas/schema1";
import { demoTable2 } from "database/schemas/schema2";

export const demoRoute = createV1App()
  .get("/connection", async (c) => {
    const isConnected = await db.$client
      .connect()
      .then(() => true)
      .catch(() => false);
    if (!isConnected) {
      return c.json({ message: "fail" }, Status.INTERNAL_SERVER_ERROR);
    } else {
      return c.json({ message: "ok" }, Status.OK);
    }
  })
  .post("/populate", async (c) => {
    const insertT1 = await db
      .insert(demoTable1)
      .values({
        message: "Hello world.",
      })
      .returning();
    const insertT2 = await db.insert(demoTable2).values({
      message: "Bonjour le monde.",
    });
    return c.json({ message: "ok" });
  })
  .get("/table1", async (c) => {
    const query = await db.select().from(demoTable1).limit(1);
    return c.json({ query });
  });
