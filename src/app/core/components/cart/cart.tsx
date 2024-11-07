"use client";

import { Verse } from "@prisma/client";
import { Tag } from "lucide-react";

const Cart = ({ verse, author, text, chapter }: Verse) => {
  const tags = ["любовь", "вера", "надежда"];

  return (
    <div className="cart">
      <a className="block w-full p-2 border h-full">
        <div className="relative inline-flex flex-col justify-between z-[2] h-full">
          <p id="mytext" className="verse-text text-white">
            {text}
          </p>
          <h5 className="mt-2 text-2xl tracking-tight text-white">
            {author} {chapter}:{verse}
          </h5>
        </div>
        <div className="tags flex gap-2 items-center mt-7">
          <Tag className="text-white w-5 h-5" />
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {"#"}
              {tag}{" "}
            </span>
          ))}
        </div>
      </a>
    </div>
  );
};

export default Cart;
