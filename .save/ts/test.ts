
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

class Item {
    image_path: string = "None";
    name: string = "None";
    wiki: string = "None";
    // type: string; (flask, 2h sword, 1h sword, etc. See class from .filter format)
    difficulty: number = 0;
}

function send_answer(val: number) {
    console.log("Answer sent : " + val);
}

function update_content_with_item(item: Item) {
    // get button1
    console.log("content updated with item: " + item.name);
}

// import uniques from "../../data/uniques.json"; // This import style requires "esModuleInterop", see "side notes"
// import * as uniques from "../../data/uniques.json"
// console.log(uniques[0]);

// async function importJson(path: string) {
//     const module = await import(`./${path}.json`);
//     return module.default;
// }

// importJson("../data/uniques").then(data => {
//     // Now you can use the data from your JSON file.
//     console.log(data);
// });

// then1: error report, then2:data
fetch("https://lvlvllvlvllvlvl.github.io/RePoE/uniques.json").then().then().catch();

console.log("F")
