import { Metadata } from 'next';
import GameSelection from "@/app/ui/game-selection";
import WipImage from "@/app/ui/wip";
import { getGameState } from "@/app/lib/actions";
import MainGame from "../lib/main-game";

export const metadata: Metadata = {
  title: 'Home',
};

export default async function Home() {
  const gameState = await getGameState();
  const started = gameState !== "game not started";

  return (
    <main>
      <WipImage />
      {started ? <MainGame /> : <GameSelection />}
    </main>
  );
}

/*

  > there are 2 factors of success:
    - the global knowledge of the many poe items
    - and the recognition in a short amount of time.

  CONTINUOUS
  - nice UI, like IG
  - nice animations
  - nice sounds
  - nice transitions
  - nice feedbacks
  - color themes (colorblind)
  - settings
  - dark/light mode

  LONG
  - Poe OAuth login for leaderboards
  - statistics page
  - 2nd difficulty mode: write the name of the unique with autocompletion
  - points system: based on item popularity, not in-game rarity.
  - Game modes:
    - Sofcore : complete the list of uniques, no time limit, no leaderboard
    - Hardcore : 1 life, 1 mistake and you're out, leaderboard for the best scores. top 100.
    - speedrun mode : complete the list of uniques as fast as possible. (can be applied to both softcore and hardcore mode)
    - Renshaw mode : display the item for a short amount of time. (can be applied to both softcore and hardcore mode)
  - public statistics:
    - average score, classed by hours played (0-100-500-1000-2500-5000-10000+)
    - average score, classed by player vetarancy (0-1-2-5-8-10+ years)
    - success rate for each unique, can be reodered by the user (default: lower success rates first)
    - average time for each unique
  - private statistics:
    - game played
    - game abandoned

  - EVE Online game

  AVERAGE
  - button for "there is a probleme with this item"
  - choice of level amount ?
  - add a timer to answer ?
  - preload next X item(s) images. Preload all images of the fixed series ? (display them at the start when they are loading)
  - make sure the image is loaded before showing it
  - predetermined list of uniques for the first visit of the user (save in cookies)
  - About page
  - flask arts are too big, they are decomposed in 3 parts. We need to find a way to display them correctly. Or we filter them out.
  - add a tooltip when hovering the wiki button showing the extracted text from the wiki page

  SHORT
  - add a button to go back to the main menu
  - right answer animation
  - wrong answer animation
  - add a button to the wiki page of the item


*/