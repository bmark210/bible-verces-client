import { Verse } from "@prisma/client";
import { getVerses } from "../core/services";
import Cart from "../core/components/cart/cart";

async function Verses() {
  const verses: Verse[] = await getVerses();
  console.log(verses, "verses");

  return (
    <>
      <div className="carts-container">
        {verses.map((verse, indexB) => (
          <Cart key={indexB} {...verse} />
        ))}
        {/* </div> */}
      </div>
    </>
  );
}

export default Verses;
