import { Verse } from "@prisma/client";
import CreateVerseForm from "./core/components/createNew/createForm";
import { getVerses } from "./core/services";

export default async function Home() {
  const verses = await getVerses();

  return (
    <>
      <CreateVerseForm />
      <div>
        <h2>Data from Server</h2>
        {verses.length === 0 ? (
          <p>No verses found.</p>
        ) : (
          <ul>
            {verses.map((verse: Verse) => (
              <li key={verse.id}>
                {verse.text} - {verse.author}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
