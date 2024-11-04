import axios from "axios";
import { VerseBody } from "../interfaces";
import { Verse } from "@prisma/client";

const baseUrl = process.env.NODE_ENV === 'production' ? window.location.origin : 'http://localhost:3000';


export async function getVerses(): Promise<Verse[]> {
  const response = await axios.get(`${baseUrl}/api/verses`);
  return response.data;
}

export async function createVerse(body: VerseBody) {
  return await axios.post(`${baseUrl}/api/verses`, body);
}

// import { db } from "@/api/db";
// import { VerseBody } from "../interfaces";

// export function getVerses() {
//   return db.selectFrom("verses").selectAll().execute();
// }

// export function createNewVerse(verse: VerseBody) {
//   return db.insertInto("verses").values(verse).returningAll().execute();
// }
