import axios from "axios";
import { Verse } from "@prisma/client";
import { VerseBody } from "../interfaces";

const baseUrl =
  typeof window !== "undefined"
    ? `${window?.location?.protocol}//${window.location.host}`
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

console.log('typeof window !== "undefined"', typeof window !== "undefined");

export async function getVerses(): Promise<Verse[]> {
  try {
    const response = await axios.get(`${baseUrl}/api/verses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching verses:", error);
    return [];
  }
}

export async function createVerse(verse: VerseBody) {
  try {
    const response = await axios.post(`${baseUrl}/api/verses`, verse);
    return response.data;
  } catch (error) {
    console.error("Error creating verse:", error);
    return null;
  }
}
