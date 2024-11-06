import axiosInstance from "../axios";
import { Verse } from "@prisma/client";
import { VerseBody } from "../interfaces";

export async function getVerses(): Promise<Verse[]> {
  try {
    const response = await axiosInstance.get(`/api/verses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching verses:", error);
    return [];
  }
}

export async function createVerse(verse: VerseBody) {
  try {
    const response = await axiosInstance.post(`/api/verses`, verse);
    return response.data;
  } catch (error) {
    console.error("Error creating verse:", error);
    return null;
  }
}
