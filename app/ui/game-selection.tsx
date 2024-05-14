'use client';

import Image from "next/image";
import poeImage from "@/public/Path_of_Exile_Logo.png";
import eveImage from "@/public/eve_desktop_logo_old_256x256.png";
import pkmnImage from "@/public/pkball.png";
import { startGame } from "@/app/lib/actions";
import { use } from "react";

export default function GameSelection() {

  const jsonUrl = {
    poe: "https://raw.githubusercontent.com/rhoffsch42/Renshaw-Game/main/public/uniques_filtered.json",
    eve: "https://raw.githubusercontent.com/rhoffsch42/Renshaw-Game/main/public/eve_uniques_filtered.json",//missing for now
    pkmn: "https://raw.githubusercontent.com/rhoffsch42/Renshaw-Game/main/public/pkmn.json"
  }

  const styles = {
    poe: "transition ease-in-out duration-300 hover:scale-110",
    eve: "rounded grayscale blur",
    pkmn: "transition ease-in-out duration-300 hover:scale-110",
  }

  return (
    <>
      <h1>Choose Game :</h1>
      <div className="flex">
        <div className="grid grid-cols-2 gap-8">

          {/* todo: mapping */}
          <div className={styles.poe}>
            <a className="hover:cursor-pointer" onClick={() => { console.log("Path of Exile Selected"); startGame(jsonUrl.poe); }}>
              <Image priority={true} src={poeImage} alt="poe logo" height='200' />
            </a>
          </div>

          <div className={styles.eve}>
            <Image priority={true} src={eveImage} alt="eve logo" height='200' />
          </div>
          
          <div className={styles.pkmn}>
            <a className="hover:cursor-pointer" onClick={() => { console.log("Pokemon Selected"); startGame(jsonUrl.pkmn); }}>
              <Image priority={true} src={pkmnImage} alt="pkmn logo" height='200' />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
