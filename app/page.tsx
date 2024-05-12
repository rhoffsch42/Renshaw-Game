import Image from "next/image";
import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Renshaw Game',
};

export default function MainPage() {
  return (
    <main>
      <p>
        In WWII, some fighter pilots were trained to recognize the model of a plane
        in a fraction of second using the Renshaw Training System for Aircraft and
        Ship Recognition.
        <br />
        Are you as good as them at your favorite game ?
      </p>

      <Link href="/game">--Start--</Link>

      <h4>
        {'Learn more about '}
        <a href="https://en.wikipedia.org/wiki/Tachistoscope" target="_blank" rel="noopener noreferrer">-tachistoscopic training-</a>
        {' and '}
        <a href="https://en.wikipedia.org/wiki/Samuel_Renshaw" target="_blank" rel="noopener noreferrer">-Samuel Renshaw-</a>
      </h4>
    </main>
  );
}
