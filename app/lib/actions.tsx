'use server';

import GameSession from "@/app/lib/game-session";
import { revalidatePath } from "next/cache";


let gameSession:GameSession;

export async function startGame(jsonUrl: string) {
    if (gameSession) {
        console.log(`[actions.tsx startGame()] Game already started`);
        revalidatePath('/game');
        return 'game already started';
    }

    console.log(`[actions.tsx startGame()] Starting Game`);
    gameSession = new GameSession();
    console.log("[actions.tsx startGame()] Game Session Created");
    await gameSession.initGameWithJsonURL(new URL(jsonUrl));
    console.log(`[actions.tsx startGame()] initGameWithJsonURL done. Current State: ${JSON.stringify(gameSession.getGameState())}`);
    revalidatePath('/game');
}

export async function guess(id: number) {
    if (!gameSession) {
        console.log(`[actions.tsx guess()] Game not started`);
        return 'game not started';
    }
    if (gameSession.gameIsOver) {
        console.log(`[actions.tsx guess()] Game is over`);
        return 'game is over';
    }
    if (id < 0 || id > 3) {
        console.log(`[actions.tsx guess()] Invalid guess`);
        return 'invalid guess';
    }

    console.log(`[actions.tsx guess()] Guessing ${id}`);
    gameSession.guess(id);
    console.log(`[actions.tsx guess()] Current State: ${JSON.stringify(gameSession.getGameState())}`);
    revalidatePath('/game');
    // return 'guessed';
}

export async function revalidateGamePage() {
    console.log(`[actions.tsx revalidateGamePage()] Revalidating Game Page`);
    console.log(`[actions.tsx revalidateGamePage()] Current State: ${JSON.stringify(gameSession.getGameState())}`);
    revalidatePath('/game');
    return 'revalidated';
}

export async function getGameState() {
    // revalidatePath('/game');
    if (!gameSession) {
        console.log(`[actions.tsx getGameState()] Game not started`);
        return 'game not started';
    }

    console.log("[actions.tsx getGameState()] Getting Game State");
    console.log(`[actions.tsx getGameState()] Current State: ${JSON.stringify(gameSession.getGameState())}`);
    return JSON.stringify(gameSession.getGameState());
}

export async function playAgain() {
    if (!gameSession) {
        console.log(`[actions.tsx PlayAgain()] Game not started`);
        return 'game not started';
    }

    console.log(`[actions.tsx PlayAgain()] Playing Again`);
    gameSession.resetGame();
    console.log(`[actions.tsx PlayAgain()] Current State: ${JSON.stringify(gameSession.getGameState())}`);
    revalidatePath('/game');
    return 'played again';
}