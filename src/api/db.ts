import { Kysely, PostgresDialect } from "kysely";
import { createPool } from "@vercel/postgres";
import { User, Verse } from "@prisma/client";

interface Database {
  users: Omit<User, "id">;
  verses: Omit<Verse, "id">;
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
