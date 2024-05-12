import Image from "next/image";
import poeImage from "@/public/Path_of_Exile_Logo.png";
import eveImage from "@/public/eve_desktop_logo_old_256x256.png";

export default function GameSelection() {
  return (
    <>
      <h1>Choose Game :</h1>
      <div className="flex">
        <div className="grid grid-cols-2 gap-8">
          <div className="hover:bg-slate-700 rounded-xl">
            <Image src={poeImage} alt="poe logo" height='200' />
          </div>
          <div className="rounded grayscale blur">
            <Image src={eveImage} alt="eve logo" height='200' />
          </div>
        </div>
      </div>
    </>
  );
}
