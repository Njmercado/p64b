<script>
  import { push } from 'svelte-spa-router'
  import works from '../Data/ListOfWorks.js'
  import Avatar from '../Components/Avatar.svelte'
  import RouterFloatingButton from '../Components/RouterFloatingButton.svelte'
</script>

<style>
  #works-page {
    background-color: black;
    min-height: 100vh;
  }

  #works-wrapper {
    height: 100vh;
    color: white;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    grid-column-gap: 4em;
    align-items: center;
    justify-content: center;
  }

  .work-container {
    cursor: pointer;
  }
</style>

<div id="works-page">
  <RouterFloatingButton />
  <div id="works-wrapper">
    {#each works as { src, title, urlArticle }}
      <div
        class="text-center work-container"
        on:click={() => push(urlArticle)}
      >
        <Avatar width="calc(16vw + 64px)" height="calc(16vw + 64px)" {src} />
        <div class="mt-1 font-size-smaller">{title}</div>
      </div>
    {/each}
  </div>
</div>
