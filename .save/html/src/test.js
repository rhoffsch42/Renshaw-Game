"use strict";
/*
difficulté:
    - choix entre 4 uniques
    - taper a la main avec une autocompletion

il y a 2 facteurs de reussite:
    - la connaissance globale des nombreux items de poe
    - et la reconnaissance en un court lapse de temps.

systeme de points:
    - en fonction des items populaires, et pas de la rareté.
        Des items rares peuvent etre tres populaire (MB, HH), et d'autres inconnus (divinarius, sanguis)

stats:
    - en fonction du nombre d'heures jouees. 0-100-500-1000-2500-5000-10000+

*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Item {
    constructor() {
        this.image_path = "None";
        this.name = "None";
        this.wiki = "None";
        // type: string; (flask, 2h sword, 1h sword, etc. See class from .filter format)
        this.difficulty = 0;
    }
}
function send_answer(val) {
    console.log("Answer sent : " + val);
}
function update_content_with_item(item) {
    // get button1
    console.log("content updated with item: " + item.name);
}
// import uniques from "../../data/uniques.json"; // This import style requires "esModuleInterop", see "side notes"
// import * as uniques from "../../data/uniques.json"
// console.log(uniques[0]);
function importJson(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const module = yield Promise.resolve(`${`./${path}.json`}`).then(s => __importStar(require(s)));
        return module.default;
    });
}
importJson("./data/uniques").then(data => {
    // Now you can use the data from your JSON file.
    console.log(data);
});
