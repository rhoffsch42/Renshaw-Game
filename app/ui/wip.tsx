import Image from "next/image";
import wipImage from "@/public/wip.png";

export default function WipImage() {
  return (
    <>
      <h1>Work in progress</h1>
      <Image src={wipImage} alt="Work in progress" width="300" height="300" />
    </>
  );
}
