<script>
  import { push } from "svelte-spa-router";
  import works from "../Data/ListOfWorks.js";
  import Avatar from "../Components/Avatar.svelte";
  import RouterFloatingButton from "../Components/RouterFloatingButton.svelte";
  import Card from "../Components/Card.svelte";
  import MyCardInfo from "../Components/MyCardInfo.svelte";

  import Column from "../Components/Grid/Column.svelte";
</script>

<style>
  .hover-translateY {
    transition-property: transform;
    transition-duration: 0.8s;
  }

  .hover-translateY:hover {
    transform: translateY(var(--translate-y));
  }
</style>

<div id="works-page" class="px-1" style="min-height: 100vh">
  <RouterFloatingButton />

  <div class="font-size-extrabigger text-white mt-2">Projects</div>

  <div class="font-size-bigger text-white ml-1 mt-2">Web</div>

  <div
    id="works-wrapper"
    class="grid grid-4-columns flex-center"
    style="min-height: 100vh">
    {#each works as { src, title, urlArticle, background, description }}
      <div
        class="hover-translateY xs-4 sm-4 md-2"
        style="--translate-y: -16px"
        on:click={() => push(urlArticle)}>
        <Card color={background} textColor="white">
          <div slot="title">
            <Avatar {src} />
          </div>
          <div class="font-size-big text-center font-bolder" slot="subtitle">
            {title}
          </div>
          <div
            class="font-size-smaller font-bold text-center"
            style="color: rgba(256, 256, 256, .6)"
            slot="content">
            {description}
          </div>
        </Card>
      </div>
    {/each}
  </div>

  <div class="font-size-bigger text-white ml-1 mt-2">ML</div>

  <!-- Contact Me -->
  <Column height="100vh" style="background-color: rgb(10, 10, 10)">
      <MyCardInfo id="myCard"></MyCardInfo>
  </Column>
</div>
