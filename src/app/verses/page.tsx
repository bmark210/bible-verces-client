import { Verse } from "@prisma/client";
import { getVerses } from "../core/services";
import Cart from "../core/components/cart/cart";

async function Verses() {
  const verses: Verse[] = await getVerses();
  console.log(verses, "verses");
  
  return (
    <>
      <div className="night-sky">
        <div className="shooting-stars"></div>

        <div className="main-container">
          {verses.map((item, indexA) => (
            <div className="block z-10" key={indexA}>
              <div className="block z-10">
                <h1 className="title text-white text-4xl md:text-5xl">
                  {item.author}
                </h1>
              </div>
              <div className="carts-container">
                {verses.map((verse, indexB) => (
                  <Cart key={indexB} {...verse} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Verses;
