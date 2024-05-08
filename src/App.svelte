<script lang="ts">
  import Game from "./Game.svelte";
  /*
   could do: read the folders in the public folder
   and generate the available games dynamically
  */
  const games: { folder: string; img: string }[] = [
    { folder: "Poe", img: "Path_of_Exile_Logo.png" },
    { folder: "Eve", img: "eve_desktop_logo_old_256x256.png" },
  ];

  const jsonUrl: URL = new URL(
    "https://lvlvllvlvllvlvl.github.io/RePoE/uniques.json",
  );
  let textAreaString: string = "";
  let showGame: boolean = true;
  // showGame = false;
</script>

<main>
  {#if showGame}
  <Game />
  {:else}

  <h2>
    In WWII, some fighter pilots were trained to recognize the model of a plane
    in a fraction of second using the Renshaw Training System for Aircraft and
    Ship Recognition.
    <br />
    Are you as good as them at your favorite game ?
  </h2>
  <br />

  <h1>Choose game :</h1>
  <br />

  <div class="game-choice">
    {#each games as game}
      <a href="/Game">
        <img
          src={game.img}
          class="logo {game.folder}"
          alt="{game.folder} logo"
        />
      </a>
    {/each}
  </div>

  <br /><br /><br />
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
  {/if}

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
  .game-choice {
    display: flex;
    justify-content: center;
  }

  .logo {
    /* on hover make the logo bigger */
    transition: transform 0.2s;
    padding-left: 10%;
    /* width: 256px; */
    /* height: 256px; */
  }

  .logo:hover {
    /* transform: scale(1.1); */
  }

  .Poe:hover {
    transform: scale(1.1);
  }

  .Poe {
    /* border: 1px solid black; */
    /* border-radius: 50%; */
  }

  .Eve {
    filter: grayscale(100%);
    /* border: 1px solid black; */
    /* border-radius: 50%; */
  }
</style>
