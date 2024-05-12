'use client';

import Image from "next/image";

export default function GameUI_1() {
  let img: string = 'https://web.poecdn.com/image/Art/2DItems/Rings/MokousEmbrace.png';
  let answers: string[] = ["_", "_", "_", "_"];
  const guess = (id: number) => {
    console.log("guess is " + id);
  }
  
  return (
    <>
      <div className="flex w-[600px]">
        <div className="bg-neutral-900 w-[176px] h-[332px] flex items-center justify-center rounded-md border-4 border-amber-900">
          <Image src={img} alt="poe logo" width="0" height="0" sizes="100vw" className="w-auto h-auto" />
        </div>


        <div className=" w-[400px] flex flex-col justify-center mx-auto space-y-4 rounded-lg bg-gray-700 py-3 px-3">
          <div className="flex justify-evenly rounded-lg bg-gray-700 py-3 px-3">
            <p>Points: 0</p>
            <p>Level: 1 / 30</p>
          </div>

          <button className="bg-gray-800 text-white p-2 rounded-md" type="button" onClick={() => guess(0)}>{answers[0]}</button>
          <button className="bg-gray-800 text-white p-2 rounded-md" type="button" onClick={() => guess(1)}>{answers[1]}</button>
          <button className="bg-gray-800 text-white p-2 rounded-md" type="button" onClick={() => guess(2)}>{answers[2]}</button>
          <button className="bg-gray-800 text-white p-2 rounded-md" type="button" onClick={() => guess(3)}>{answers[3]}</button>
        </div>
      </div>
    </>
  );
}
