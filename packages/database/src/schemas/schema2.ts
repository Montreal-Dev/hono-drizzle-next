import { uuid } from "drizzle-orm/pg-core";
import { varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core"

export const demoTable2 = pgTable("table2", {
    id: uuid().defaultRandom().primaryKey(),
    message: varchar({ length: 255 }).notNull(),
});