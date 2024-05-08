<script lang="ts">
  import Item from "./Item";

  const jsonUrl: URL = new URL(
    "https://raw.githubusercontent.com/rhoffsch42/Renshaw-Game/main/public/uniques_filtered.json",
  );
  let promise: Promise<void> = initGame();
  let items: Item[];
  let currentItem: Item;

  let points: number = 0;
  let level: number = 1;
  let maxLevel: number = 5;
  let answers: string[] = ["n", "n", "n", "n"];
  let correctAnswerIndex: number = 0;
  let indexes: number[] = [];
  let predeterminedIndexes: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  async function initGame() {
    items = await Item.fetchUniques(jsonUrl);
    resetGame();
  }

  function resetGame() {
    points = 0;
    level = 1;
    generateIndexes();
    loadItem(items[indexes[level - 1]]);
  }

  function generateIndexes() {
    for (let i = 0; i < maxLevel; i++) {
      indexes.push(Math.floor(Math.random() * items.length));
    }
  }
  function guess(n: number) {
    console.log("guess is " + n);
    console.log("correct answer is " + correctAnswerIndex);
    if (n === correctAnswerIndex) {
      points++;
    }
    if (level !== maxLevel) {
      level++;
      loadItem(items[indexes[level - 1]]);
    } else {
      alert("Game over, you scored " + points + " points !");
    }
  }

  function loadItem(item: Item) {
    currentItem = item;
    correctAnswerIndex = Math.floor(Math.random() * 4);
    answers[correctAnswerIndex] = currentItem.name;
    for (let i = 0; i < 4; i++) {
      if (i === correctAnswerIndex) {
        continue;
      }
      let randomIndex = Math.floor(Math.random() * items.length);
      while (items[randomIndex].name === currentItem.name) {
        randomIndex = Math.floor(Math.random() * items.length);
      }
      answers[i] = items[randomIndex].name;
    }
  }
</script>

<main>
  <!-- {#await Item.fetchUniques(jsonUrl)}
    <h4>loading data...</h4>
  {:then res}
    {#if (items = res) == null}{/if}
    <h4>data loaded {items[0].name}</h4>
  {/await} -->

  {#await promise}
    <h4>loading data...</h4>
  {:then}
    <h4>data loaded</h4>
  {/await}

  <h1>Level {level} / {maxLevel}</h1>
  <h1>Points : {points}</h1>
  <br />

  <div class="main_container">
    {#if level === maxLevel}
    <div style="display:flex;flex-direction:column;">
      <h1>Game over, you scored {points} points !</h1><br>
      <button class="button_reset" on:click={resetGame}>Play again</button>
    </div>
    {:else}
      <div class="art_slot">
        {#await promise}
          <img src={"1.png"} class="art" alt="unique art" />
        {:then}
          <img
            src={currentItem.image_url.toString()}
            class="art"
            alt="unique art"
          />
        {/await}
      </div>

      <div class="game-choice">
        <button class="button" type="button" on:click={() => guess(0)}
          >{answers[0]}</button
        >
        <button class="button" type="button" on:click={() => guess(1)}
          >{answers[1]}</button
        >
        <button class="button" type="button" on:click={() => guess(2)}
          >{answers[2]}</button
        >
        <button class="button" type="button" on:click={() => guess(3)}
          >{answers[3]}</button
        >
      </div>
    {/if}
  </div>
  <!-- ->
  {#await Item.fetchAndProcessJson(jsonUrl)}
    <h1>loading uniques data...</h1>
  {:then res}
    <h1>data :</h1>
    {#if (textAreaString = JSON.stringify(res)) !== ""}{/if}
    <textarea bind:value={textAreaString} />
  {/await}
  <!-- -->
</main>

<style>
  .main_container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 350px;
    background-color: #a16725;
  }

  /* max size of arts 156x312 */
  .art_slot {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 176px;
    height: 332px;
    border-width: 5px;
    border-radius: 5px;
    border-color: #381600;
    background-color: #181818;
    position: relative;
  }

  .art {
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* background-color: aqua; */
  }

  .game-choice {
    /* // display choice buttons in a column */
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    min-width: 300px;
    background-color: burlywood;
  }

  .button {
    margin: 5px;
    font-size: 20px;
    color: white;
    background-color: #333333;
  }

  button:focus {
    outline: 0;
  }

  .button:hover {
    background-color: #a16725;
  }

  .button_reset {
    margin: auto;
    max-width: 200px;
    font-size: 20px;
    color: white;
    background-color: #333333;
  }
</style>
