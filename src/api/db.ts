import { Kysely, PostgresDialect } from "kysely";
import { createPool } from "@vercel/postgres";
import { Context, User, Verse } from "@prisma/client";

interface Database {
  users: Omit<User, "id">;
  verses: Omit<Verse, "id">;
  contexts: Omit<Context, "id">;
}

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: createPool({
      connectionString: process.env.DATABASE_URL, 
      ssl: {
        rejectUnauthorized: false,
      },
    }),
  }),
});
