import axios from "axios";
import { VerseBody } from "../interfaces";
import { Verse } from "@prisma/client";

const baseUrl = 
  typeof window !== 'undefined' && process.env.NODE_ENV === 'production' 
    ? window.location.origin 
    : process.env.NODE_ENV === 'production'
    ? process.env.PRODUCTION_API_URL 
    : 'http://localhost:3000';

export async function getVerses(): Promise<Verse[]> {
  const response = await axios.get(`${baseUrl}/api/verses`);
  return response.data;
}

export async function createVerse(body: VerseBody) {
  return await axios.post(`${baseUrl}/api/verses`, body);
}
