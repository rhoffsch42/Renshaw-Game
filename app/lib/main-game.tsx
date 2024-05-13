import GameUI_1 from "@/app/ui/game-ui-1";
import { getGameState } from "@/app/lib/actions";

export default async function MainGame() {
  const state = await getGameState();

  return (
    <>
      <h1>Game Session :</h1>
      <GameUI_1 state={JSON.parse(state)} />
      <textarea className="bg-slate-600 h-[320px] w-[100%] p-2 mt-2" value={"Current State: " + JSON.stringify(JSON.parse(state), null, 2)} readOnly />
    </>
  );
}
