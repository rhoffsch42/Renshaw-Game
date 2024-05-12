import Image from "next/image";
import Item from "@/app/lib/Item";
import GameState from "@/app/lib/game-state";
import GameUI_1 from "../ui/game-ui-1";

export default function MainGame() {
  const jsonUrl: URL = new URL(
    "https://raw.githubusercontent.com/rhoffsch42/Renshaw-Game/main/public/uniques_filtered.json",
  );
  const gameState = new GameState();
  gameState.initGameWithJsonURL(jsonUrl); // should be await ?

  return (
    <>
      <GameUI_1 />
    </>
  );
}
