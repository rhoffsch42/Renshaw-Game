import Image from "next/image";
import { Metadata } from 'next';
import WipImage from "@/app/ui/wip";
 
export const metadata: Metadata = {
    title: 'Statistics',
};

export default function Home() {
  return (
    <main>
      <h1>Statistics</h1>
      <WipImage />
    </main>
  );
}
