import Image from "next/image";
import Item from "@/app/lib/Item";
import GameState from "@/app/lib/game-state";

export default function MainGame() {
  const jsonUrl: URL = new URL(
    "https://raw.githubusercontent.com/rhoffsch42/Renshaw-Game/main/public/uniques_filtered.json",
  );
  const gameState = new GameState();
  gameState.initGameWithJsonURL(jsonUrl); // should be await ?

  return (
    <>
      <div className="bg-gray-800">

      </div>
    </>
  );
}
