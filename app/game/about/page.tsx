import Image from "next/image";
import { Metadata } from 'next';
import WipImage from "@/app/ui/wip";
 
export const metadata: Metadata = {
    title: 'About',
};

export default function About() {
  return (
    <main>
      <h1>About</h1>
      <WipImage />
    </main>
  );
}
