-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_VerseTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_VerseTags_AB_unique" ON "_VerseTags"("A", "B");

-- CreateIndex
CREATE INDEX "_VerseTags_B_index" ON "_VerseTags"("B");

-- AddForeignKey
ALTER TABLE "_VerseTags" ADD CONSTRAINT "_VerseTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_VerseTags" ADD CONSTRAINT "_VerseTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Verse"("id") ON DELETE CASCADE ON UPDATE CASCADE;
