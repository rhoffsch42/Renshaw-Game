'use client';

import Image from "next/image";
import defaultImg from "@/public/default.png";
import { guess } from "@/app/lib/actions";
import { GameState } from "@/app/lib/game-session";

export default function GameUI_1({state}: {state: GameState}) {
  let i: number = 0;
  if (!state) {
    return (
      <div className="flex w-[600px]">
        <div className="bg-neutral-900 w-[176px] h-[332px] flex items-center justify-center rounded-md border-4 border-amber-900">
          <Image src={defaultImg} alt="poe logo" width="0" height="0" sizes="100vw" className="w-auto h-auto" />
        </div>
      </div>
    );
  }
  console.log(`[${i++}]Current State: ${JSON.stringify(state, null, 2)}`);
  return (
    <>
      <div className="flex w-[600px]">
        <div className="bg-neutral-900 w-[176px] h-[332px] flex items-center justify-center rounded-md border-4 border-amber-900">
          <Image src={state.img?.toString()} alt="poe logo" width="0" height="0" sizes="100vw" className="w-auto h-auto" />
        </div>


        <div className=" w-[400px] flex flex-col justify-center mx-auto space-y-4 rounded-lg bg-gray-700 py-3 px-3">
          <div className="flex justify-evenly rounded-lg bg-gray-700 py-3 px-3">
            <p>Points: {state.points}</p>
            <p>Level: {state.level} / {state.maxLevel}</p>
          </div>

          <button className="bg-gray-800 text-white p-2 rounded-md" type="button" onClick={() => guess(0)}>{state.answers[0]}</button>
          <button className="bg-gray-800 text-white p-2 rounded-md" type="button" onClick={() => guess(1)}>{state.answers[1]}</button>
          <button className="bg-gray-800 text-white p-2 rounded-md" type="button" onClick={() => guess(2)}>{state.answers[2]}</button>
          <button className="bg-gray-800 text-white p-2 rounded-md" type="button" onClick={() => guess(3)}>{state.answers[3]}</button>
        </div>
      </div>
    </>
  );
}
