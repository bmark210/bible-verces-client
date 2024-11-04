import { Verse } from "@prisma/client";

export type VerseBody = Omit<Verse, "id">;