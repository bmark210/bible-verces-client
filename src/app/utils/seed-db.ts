// import { Kysely, PostgresDialect } from "kysely";
// import { createPool } from "@vercel/postgres";

// interface UserTable {
//   id?: Generator<string>;
//   name: string;
//   email: string;
//   created_at: Generator<Date>;
// }

// export interface Books {
//   id?: Generator<string>;
//   name: string;
//   verses: Verse[];
// }

// export interface Verse {
//   id?: Generator<string>;
//   chapter: number;
//   verse: string;
//   text: string;
// }

// interface Database {
//   users: UserTable;
//   verses: Books;
// }

// // Initialize and export the Kysely instance
// export const db = new Kysely<Database>({
//   dialect: new PostgresDialect({
//     pool: createPool({
//       connectionString: process.env.POSTGRES_URL,
//     }),
//   }),
// });




// export async function seedDatabase(verses: Verse[]) {
//   console.log("Seeding database...");
//   try {
//     await db
//       .insertInto("verses")
//       .values({
//         name: "От Матфея",
//         verses: verses,
//       })
//       .execute();
//     console.log("Seeding completed successfully!");
//   } catch (error) {
//     console.error("Error while seeding the database:", error);
//   } finally {
//     await db.destroy(); // Close the connection after seeding
//   }
// }

// // seedDatabase().catch((error) => {
// //   console.error("Error while seeding the database:", error);
// // });
