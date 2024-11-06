"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { createVerse } from "../../services";
import { VerseBody } from "../../interfaces";
// import { createVerse } from "../../services";

type VerseFormInputs = {
  author: string;
  chapter: string;
  verse: string;
  text: string;
};

const CreateVerseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerseFormInputs>();

  const onSubmit: SubmitHandler<VerseFormInputs> = async (data) => {
    const verse: VerseBody = {
      author: data.author,
      chapter: data.chapter,
      verse: data.verse,
      text: data.text,
    };

    await createVerse(verse);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 py-16"
    >
      <div className="flex flex-col">
        <label className="text-white" htmlFor="author">
          Автор
        </label>
        <select
          {...register("author", { required: "Author is required" })}
          name="author"
          className="border p-2 rounded bg-white text-black"
        >
          <option value="От Матфея">От Матфея</option>
          <option value="От Марка">От Марка</option>
          <option value="От Луки">От Луки</option>
          <option value="От Иоанна">От Иоанна</option>
          <option value="Деяния">Деяния</option>
          <option value="Послание к Римлянам">Послание к Римлянам</option>
          <option value="1-е Коринфянам">1-е Коринфянам</option>
          <option value="2-е Коринфянам">2-е Коринфянам</option>
          <option value="Галатам">Галатам</option>
          <option value="Ефесянам">Ефесянам</option>
          <option value="Филиппийцам">Филиппийцам</option>
          <option value="Колоссянам">Колоссянам</option>
          <option value="1-е Фессалоникийцам">1-е Фессалоникийцам</option>
          <option value="2-е Фессалоникийцам">2-е Фессалоникийцам</option>
          <option value="1-е Тимофею">1-е Тимофею</option>
          <option value="2-е Тимофею">2-е Тимофею</option>
          <option value="Титу">Титу</option>
          <option value="Филимону">Филимону</option>
          <option value="Евреям">Евреям</option>
          <option value="Иаков">Иаков</option>
          <option value="1-е Петра">1-е Петра</option>
          <option value="2-е Петра">2-е Петра</option>
          <option value="1-е Иоанна">1-е Иоанна</option>
          <option value="2-е Иоанна">2-е Иоанна</option>
          <option value="3-е Иоанна">3-е Иоанна</option>
          <option value="Иуда">Иуда</option>
          <option value="Откровение Иоанна">Откровение Иоанна</option>
        </select>
      </div>
      <div className="flex flex-col ">
        <label className="text-white" htmlFor="chapter">
          Chapter
        </label>
        <input
          id="chapter"
          {...register("chapter", { required: "Chapter is required" })}
          placeholder="Enter chapter number"
          className="border p-2 rounded text-white bg-transparent placeholder:text-white"
        />
        {errors.chapter && (
          <p className="text-red-500">{errors.chapter.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-white" htmlFor="verse">
          Verse
        </label>
        <input
          id="verse"
          {...register("verse", { required: "Verse is required" })}
          placeholder="Enter verse number"
          className="border p-2 rounded text-white bg-transparent placeholder:text-white"
        />
        {errors.verse && <p className="text-red-500">{errors.verse.message}</p>}
      </div>

      <div className="flex flex-col ">
        <label className="text-white" htmlFor="text">
          Text
        </label>
        <textarea
          id="text"
          {...register("text", { required: "Text is required" })}
          placeholder="Enter the verse text"
          className="border p-2 rounded text-white bg-transparent placeholder:text-white"
        ></textarea>
        {errors.text && <p className="text-red-500">{errors.text.message}</p>}
      </div>

      <Button
        className="w-full bg-transparent filter hover:brightness-125 hover:bg-white hover:text-black border-white border border-solid"
        type="submit"
      >
        Create new verse
      </Button>
    </form>
  );
};

export default CreateVerseForm;
