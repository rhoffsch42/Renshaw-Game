'use server';

import GameSession from "./game-session";
import { revalidatePath } from "next/cache";

const jsonUrl: URL = new URL(
    "https://raw.githubusercontent.com/rhoffsch42/Renshaw-Game/main/public/uniques_filtered.json",
);
export const gameSession = new GameSession();
gameSession.initGameWithJsonURL(jsonUrl);

export async function guess(id: number) {
    console.log(`[actions.tsx] Guessing ${id}`);
    // gameSession.guess(id);
    console.log(`[actions.tsx] Current State: ${JSON.stringify(gameSession.getGameState(), null, 2)}`);
    // revalidatePath('/game');
    return { message: 'guessed' };
}

export async function revalidateGamePage() {
    console.log(`[actions.tsx] Revalidating Game Page`);
    console.log(`[actions.tsx] Current State: ${JSON.stringify(gameSession.getGameState(), null, 2)}`);
    console.log(`[actions.tsx] Revalidating Game Page`);
    // revalidatePath('/game');
    return { message: 'revalidated' };
}

export async function getGameState() {
    console.log("[actions.tsx] Getting Game State");
    // console.log(`[actions.tsx] Current State: ${JSON.stringify(gameSession.getGameState(), null, 2)}`);
    // return JSON.stringify(gameSession.getGameState(), null, 2);
}