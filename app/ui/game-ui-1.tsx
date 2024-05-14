'use client';

import Image from "next/image";
import defaultImg from "@/public/default.png";
import { guess, playAgain } from "@/app/lib/actions";
import { GameState } from "@/app/lib/game-session";

export default function GameUI_1({ state }: { state: GameState }) {
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
  console.log(`[${i++}]Current State: ${JSON.stringify(state)}`);

  const styles = {
    main: "flex w-[600px]",
    imgBg: "bg-neutral-900 w-[176px] h-[332px] flex items-center justify-center rounded-md border-4 border-amber-900 ",
    img: "", // m-auto absolute top-0 left-0 right-0 bottom-0
    text: "w-[400px] flex flex-col justify-center mx-auto space-y-4 rounded-lg bg-gray-700 py-3 px-3",
    points: "flex justify-evenly bg-slate-500 py-3 px-3",
    congrats: "flex justify-evenly py-3 px-3 text-right",
    buttons: "bg-gray-800 hover:bg-amber-600 text-white p-2 rounded-md",
  };

  const gameoverCongratsPoe = [
    "You are a disgrace, Exile.",
    "You need more practice, Exile.",
    "Not bad, Exile. You will do better next time.",
    "“A partial victory is no victory at all.” </br> — Emperor Izaro",
    "You are a true Exile !",
    "Perfect score! Great job, Exile!"
  ];
  const gameoverCongrats = [
    "Do you really know that game?",
    "You need more practice!",
    "Not bad. You will do better next time.",
    "“A partial victory is no victory at all.” </br> — Emperor Izaro",
    "Congratulations! You know a lot about this game.",
    "Perfect score! Great job!"
  ];
  const index = Math.floor(state.points/state.maxLevel*(gameoverCongrats.length-1));
  // state.points = 2;
  // state.gameIsOver = true;
  // quit warning : Above all else, an emperor needs to finish what he started. - Emperor Izaro
  // state.img = "https://web.poecdn.com/image/Art/2DItems/Weapons/TwoHandWeapons/Bows/Darkscorn.png"

  if (state.gameIsOver) {
    return (
      <div className={styles.main}>

        <div className={styles.text}>
          <div className={styles.points}>
            <p>Points: {state.points}</p>
            <p>Level: {state.level} / {state.maxLevel}</p>
          </div>
          <p className={styles.congrats} dangerouslySetInnerHTML={{ __html: gameoverCongrats[index] }}></p>

          <button className={styles.buttons} type="button" onClick={() => playAgain()}>Play Again</button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className={styles.main}>
          <div className={styles.imgBg}>
            {/* <Image src={state.img?.toString()} alt="poe logo" width="0" height="0" sizes="100vw" className={styles.img} /> */}
            {/* couldn't find a way to have the image size not altered by nextJS Image component */}
            <img src={state.img?.toString()} alt="unique art" />
          </div>

          <div className={styles.text}>
            <div className={styles.points}>
              <p>Points: {state.points}</p>
              <p>Level: {state.level} / {state.maxLevel}</p>
            </div>

            <button className={styles.buttons} type="button" onClick={() => guess(0)}>{state.answers[0]}</button>
            <button className={styles.buttons} type="button" onClick={() => guess(1)}>{state.answers[1]}</button>
            <button className={styles.buttons} type="button" onClick={() => guess(2)}>{state.answers[2]}</button>
            <button className={styles.buttons} type="button" onClick={() => guess(3)}>{state.answers[3]}</button>
          </div>
        </div>
      </>
    );
  }

}
