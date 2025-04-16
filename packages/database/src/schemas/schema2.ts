import { uuid } from "drizzle-orm/pg-core";
import { varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core"

export const otherDemoTable = pgTable("applications", {
    id: uuid().defaultRandom().primaryKey(),
    message: varchar({ length: 48 }).notNull(),
});