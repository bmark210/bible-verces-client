import { Context } from "@prisma/client";

export type ContextBody = Omit<Context, "id">;
