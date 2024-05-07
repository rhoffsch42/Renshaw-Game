
// json format from https://lvlvllvlvllvlvl.github.io/RePoE/uniques.json
type RawItem = {
    base_version: { name: string; rowid: number };
    id: string;
    inventory_height: number;
    inventory_width: number;
    is_alternate_art: true | false;
    item_class: string;
    name: string;
    renamed_version: string;
    visual_identity: {
        dds_file: string;
        id: string;
    };
};
interface RawItemList {
    [index: string]: RawItem;
}
interface ItemList {
    [index: string]: Item;
}
// fetch(jsonUrl)
//   .then((res) => res.json())
//   .then((data) => {
//     jsonData = data;
//     console.log("fetch");
//   });

class Item {
    image_url: URL = new URL("https://web.poecdn.com/image/");
    name: string = "None";
    wiki_url: URL = new URL("https://www.poewiki.net/wiki/");
    difficulty: number = 1;
    // type: string; (flask, 2h sword, 1h sword, etc. See class from .filter format)

    constructor(raw_item: RawItem) {
        this.image_url = new URL(
            "https://web.poecdn.com/image/" +
            raw_item.visual_identity.dds_file.slice(0, -3) +
            "png",
        );
        this.name = raw_item.name;
        this.wiki_url = new URL(
            "https://www.poewiki.net/wiki/" + raw_item.name.replaceAll(" ", "_"),
        );
    }

    public static isEligible(rawItemList: RawItemList, key: string): boolean {
        /*
          alternate art [921 -> 1048]
          renamed version : [67, 98, 339, 665, 724, 730, 733, 735]
          prophecy/replica with same art : [...]
        */
        return (
            rawItemList[key].is_alternate_art === false &&
            rawItemList[key].renamed_version === null &&
            (rawItemList[key].base_version === null ||
                rawItemList[rawItemList[key].base_version.rowid.toString()]
                    .visual_identity.dds_file !=
                rawItemList[key].visual_identity.dds_file)
        );
    }

    public static async fetchAndProcessJson(url: URL): Promise<Item[]> {
        let items: Item[] = [];
        const res = await fetch(url);
        const data: RawItemList = await res.json();

        let i: number = 0;
        for (const key in data) {
            if (!data[key] || !Item.isEligible(data, key)) {
                continue;
            }
            items.push(new Item(data[key]));
            i++;
        }
        console.log(items.length);
        return items;
    }
}

export default Item;