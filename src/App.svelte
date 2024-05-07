<script lang="ts">
  import poe_logo from "/Path_of_Exile_Logo.png";
  import eve_logo from "/1.png";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import fs from "fs";

  const jsonUrl: URL = new URL(
    "https://lvlvllvlvllvlvl.github.io/RePoE/uniques.json",
  );

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
  }

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
  let jsonData: Item[] = [];
  // fetch(jsonUrl)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     jsonData = data;
  //     console.log("fetch");
  //   });
  async function fetchAndProcessJson(url: URL): Promise<void> {
    const res = await fetch(url);
    const data: RawItemList = await res.json();

    let i: number = 0;
    for (const key in data) {
      if (!data[key] || !Item.isEligible(data, key)) {
        continue;
      }
      jsonData.push(new Item(data[key]));
      i++;
    }
    console.log(jsonData.length);
    fs.writeFile("user.json", jsonData, (err: any) => {
      if (err) {
        console.log("Error writing file:", err);
      } else {
        console.log("Successfully wrote file");
      }
    });
  }
  fetchAndProcessJson(jsonUrl);
  console.log(jsonData.length);
</script>

<main>
  <p>
    In WWII, some fighter pilots were trained to recognize the model of a plane
    in a fraction of second using the Renshaw Training System for Aircraft and
    Ship Recognition.
    <br />
    Are you as good as them at your favorite game ?
  </p>
  <br />

  <h1>Choose game :</h1>
  <a href="https://pathofexile.com" target="_blank" rel="noreferrer">
    <img src={poe_logo} class="logo poe" alt="poe Logo" />
  </a>
  <a href="https://eveonline.com" target="_blank" rel="noreferrer">
    <img src={eve_logo} class="logo eve" alt="eve Logo" />
  </a>

  <h4>
    Learn more about <a
      href="https://en.wikipedia.org/wiki/Tachistoscope"
      target="_blank"
      rel="noopener noreferrer"
    >
      tachistoscopic training
    </a>
    and
    <a
      href="https://en.wikipedia.org/wiki/Samuel_Renshaw"
      target="_blank"
      rel="noopener noreferrer">Samuel Renshaw</a
    >
  </h4>

  <h1>PoE</h1>

  <div class="card">
    <Counter />
  </div>

  <!--   
  {#await fetch("https://lvlvllvlvllvlvl.github.io/RePoE/uniques.json")}
    <h1>loading file</h1>
  {:then res}
    <h1>res</h1>
    {#await res.json()}
      <h2>building json</h2>
    {:then jsonData} 
    <h2>json ready {jsonData["0"].visual_identity.dds_file}</h2>
    {/await}
  {/await}
-->
</main>

<style>
</style>
