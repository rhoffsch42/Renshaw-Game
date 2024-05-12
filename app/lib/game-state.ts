import Item from "@/app/lib/Item";

export default class GameState {
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
        this.currentItem = {} as Item;
        this.points = 0;
        this.level = 1;
        this.maxLevel = 30;
        this.answers = ["_", "_", "_", "_"];
        this.correctAnswerIndex = 0;
        this.indexes = [];
        this.gameIsOver = false;
    }


    async initGameWithJsonURL(jsonUrl: URL) {
        this.items = await Item.fetchUniques(jsonUrl);
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
        this.generateIndexes();
        this.loadItem(this.items[this.indexes[this.level - 1]]);
    }

    generateIndexes() {
        this.indexes = [];
        for (let i = 0; i < this.maxLevel; i++) {
            this.indexes.push(Math.floor(Math.random() * this.items.length));
        }
    }
    
    guess(n: number) {
        console.log("guess is " + n);
        console.log("correct answer is " + this.correctAnswerIndex);
        if (n === this.correctAnswerIndex) {
            this. points++;
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
}