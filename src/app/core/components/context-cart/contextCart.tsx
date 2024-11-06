"use client";

import { Context } from "@prisma/client";
import React, { useEffect, useRef } from "react";

const ContextCart = ({ text, chapter, author }: Context) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  function adjustFontSize() {
    const container = containerRef.current;
    const text = textRef.current;

    if (container && text) {
      let fontSize = 100;
      text.style.fontSize = `${fontSize}px`;

      while (text.offsetHeight + 115 > container.clientHeight) {
        fontSize -= 1;
        textRef.current.style.fontSize = `${fontSize}px`;

        if (fontSize <= 10) break;
      }
    }
  }

  useEffect(() => {
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        adjustFontSize();
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    adjustFontSize();

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className="cart">
        <a href="#" className="block max-w-sm p-6 border h-full">
          <div className="relative inline-flex flex-col justify-between z-[2] h-full">
            <h5 className="mt-2 text-2xl tracking-tight text-white">
              {author} {chapter}
            </h5>
            <p id="mytext" ref={textRef} className="verse-text text-white">
              {text}
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default ContextCart;
