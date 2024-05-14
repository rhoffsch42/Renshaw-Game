import Item from "@/app/lib/Item";

export type GameState = {
    points: number;
    level: number;
    maxLevel: number;
    answers: string[];
    img: string;
    gameIsOver: boolean;
};

export default class GameSession {
    items: Item[];
    currentItem: Item;
    points: number;
    level: number;
    maxLevel: number;
    answers: string[];
    correctAnswerIndex: number;
    indexes: number[];
    gameIsOver: boolean;

    constructor() {
        this.items = [];
        this.currentItem = Item.emptyItem();
        this.points = -1;
        this.level = -1;
        this.maxLevel = -1;
        this.answers = ["_", "_", "_", "_"];
        this.correctAnswerIndex = -1;
        this.indexes = [];
        this.gameIsOver = false;
    }


    async initGameWithJsonURL(jsonUrl: URL) {
        this.items = await Item.fetchUniques(jsonUrl);
        console.log(`[GameSession] Items fetched: ${this.items.length}`);
        this.resetGame();
    }

    initGameWithItems(itemsList: Item[]) {
        this.items = itemsList;
        this.resetGame();
    }

    resetGame() {
        this.gameIsOver = false;
        this.points = 0;
        this.level = 1;
        this.maxLevel = 10;
        this.generateIndexes();
        const i = this.indexes[this.level - 1];
        console.log(`[GameSession] Loading 1st item, index ${i}`);
        this.loadItem(this.items[this.indexes[this.level - 1]]);
    }

    generateIndexes() {
        this.indexes = [];
        for (let i = 0; i < this.maxLevel; i++) {
            this.indexes.push(Math.floor(Math.random() * this.items.length));
        }
        console.log(`[GameSession] Indexes generated: ${this.indexes}`);
    }

    guess(n: number) {
        console.log(`Guessing ${n}. Correct answer is ${this.correctAnswerIndex}`);

        if (n === this.correctAnswerIndex) {
            this.points++;
        }
        if (this.level !== this.maxLevel) {
            this.level++;
            this.loadItem(this.items[this.indexes[this.level - 1]]);
        } else {
            // alert("Game over, you scored " + points + " points !");
            this.gameIsOver = true;
        }
    }

    loadItem(item: Item) {
        console.log(`[GameSession] Loading item: ${item.name}`);
        this.currentItem = item;
        this.correctAnswerIndex = Math.floor(Math.random() * 4);
        this.answers[this.correctAnswerIndex] = this.currentItem.name;
        for (let i = 0; i < 4; i++) {
            if (i === this.correctAnswerIndex) {
                continue;
            }
            let randomIndex = Math.floor(Math.random() * this.items.length);
            while (this.items[randomIndex].name === this.currentItem.name) {
                randomIndex = Math.floor(Math.random() * this.items.length);
            }
            this.answers[i] = this.items[randomIndex].name;
        }
    }

    toJson(): string {
        return JSON.stringify(this);
    }
    
    getGameState(): GameState {
        return {
            points: this.points,
            level: this.level,
            maxLevel: this.maxLevel,
            answers: this.answers,
            img: this.currentItem.image_url.toString(),
            gameIsOver: this.gameIsOver,
        };
    }
}
