<script lang="ts">
  import poe_logo from "/Path_of_Exile_Logo.png";
  import eve_logo from "/eve_desktop_logo_old_256x256.png";
  import Item from "./Item";

  const jsonUrl: URL = new URL(
    "https://lvlvllvlvllvlvl.github.io/RePoE/uniques.json",
  );

  let textAreaString: string = "";
</script>

<main>
  <h2>
    In WWII, some fighter pilots were trained to recognize the model of a plane
    in a fraction of second using the Renshaw Training System for Aircraft and
    Ship Recognition.
    <br />
    Are you as good as them at your favorite game ?
  </h2>
  <br />

  <h2>Choose game :</h2>
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
</style>
