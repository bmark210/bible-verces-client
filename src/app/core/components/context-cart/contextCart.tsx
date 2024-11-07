import { Context } from "@prisma/client";


const ContextCart = ({ text, chapter, author }: Context) => {

  return (
    <>
      <div className="cart">
        <a href="#" className="block h-full">
          <div className="relative inline-flex flex-col justify-between z-[2] h-full">
            <h5 className="mt-2 text-2xl tracking-tight text-white">
              {author} {chapter}
            </h5>
            <p className="verse-text text-white mt-5">{text}</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default ContextCart;
