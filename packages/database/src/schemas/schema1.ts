import { uuid } from "drizzle-orm/pg-core";
import { varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core"

export const demoTable1 = pgTable("table1", {
    id: uuid().defaultRandom().primaryKey(),
    message: varchar({ length: 255 }).notNull(),
});