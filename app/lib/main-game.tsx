'use client';

import GameUI_1 from "../ui/game-ui-1";
import { gameSession, getGameState } from "@/app/lib/actions";
import { useFormState } from 'react-dom';
import { revalidateGamePage } from "@/app/lib/actions";

export default function MainGame() {
  const initialGameState =
  // JSON.stringify(
  {
    points: 0,
    level: 1,
    maxLevel: 30,
    answers: ["_", "_", "_", "_"],
    img: "https://web.poecdn.com/image/Art/2DItems/Belts/Headhunter.png",
  }
    // , null, 2)
  ;
  const initialState = { message: "initial state" };
  const [state, dispatch] = useFormState(revalidateGamePage, initialState);


  // let state = gameSession.getGameState();
  // console.log(`Current State: ${JSON.stringify(state, null, 2)}`);
  return (
    <>

      <h1>Game Session :</h1>
      <GameUI_1 state={initialGameState} />
      <div className="bg-slate-800 p-4 m-4">
        <button className="bg-amber-800 p-2" onClick={dispatch}>Revalidate</button>
        <textarea className="bg-slate-600 h-[320px] w-[100%] p-2 mt-2" value={"Current State: " + state.message} readOnly />
      </div>

    </>
  );
}
