import { Verse } from "@prisma/client";
import { getVerses } from "../core/services";
import Cart from "../core/components/cart/cart";
import CreatingModal from "./components/creating-modal";

async function Verses() {
  const verses: Verse[] = await getVerses();

  return (
    <>
      <div className="flex flex-col gap-4">
        <CreatingModal />
      </div>

      <div className="carts-container">
        {verses.map((verse, index) => (
          <Cart key={index} {...verse} />
        ))}
      </div>
    </>
  );
}

export default Verses;
