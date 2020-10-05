<script>
  import { push } from "svelte-spa-router";
  import Column from "../Components/Grid/Column.svelte";
  import Container from "../Components/Grid/Container.svelte";
  import Logo from "../Components/Logo.svelte";
  import Button from "../Components/Button.svelte";
  import Avatar from "../Components/Avatar.svelte";
  import Card from "../Components/Card.svelte";
  import Chip from "../Components/Chip.svelte";
  import RouterFloatingButton from "../Components/RouterFloatingButton.svelte";
  import ListOfWorks from "../Data/ListOfWorks.js";

  import MyCardInfo from "../Components/MyCardInfo.svelte";
</script>

<style>
  .flex-container {
    display: flex;
    flex-direction: row;
    min-height: 80vh;
  }

  @media screen and (max-width: 600px) {
    .flex-container {
      flex-direction: column;
    }
  }
</style>

<main>
  <!-- floating router button -->
  <RouterFloatingButton></RouterFloatingButton>

  <!-- Main short description -->
  <Container columns={2}>
    <Column
      height="100vh"
      columns={1}
      xs={2}
      style="color: white">
      <h1 class="text-white font-size-extrabigger font-100">THIS IS P64B</h1>
      <h2 class="text-white font-size-small font-100">Full Stack Web Developer</h2>
      <Button textColor="rgba(0, 0, 0, .8)" round="16px" click={() => push('/about')}>more</Button>
    </Column>
    <Column height="100vh" columns={1} xs={2} style="background-color: white">
      <Logo width={384} height={384} weight={4} />
    </Column>
  </Container>

  <div class="font-size-extrabigger text-white ml-2 mt-2">Top Projects</div>

  <!-- List of Works -->
  <div class="flex-container h-flex-center v-flex-center bg-black">
    {#each ListOfWorks as { title, src, description, techs, background, projectDescriptionSite, site }, index}
      <div on:click={() => push(projectDescriptionSite)}>
        <Card color={background} textColor="white" size="28vw">
          <div slot="title">
            <Avatar width="10vw" height="10vw" {src} />
          </div>
          <div class="font-size-big text-center font-bolder" slot="subtitle">
            {title}
          </div>
          <div
            class="font-size-small text-center"
            style="color: rgba(256, 256, 256, .6)"
            slot="content">
            {description}
          </div>
        </Card>
      </div>
    {/each}
  </div>
  <Button
    textColor="rgba(0, 0, 0, .8)"
    round="16px"
    size="300px"
    textSize="25px"
    click={() => push('/works')}>
    <div class="font-bolder">Discover more projects</div>
  </Button>

  <!-- Contact Me -->
  <Column height="100vh" style="background-color: rgb(10, 10, 10)">
    <MyCardInfo id="myCard"></MyCardInfo>
  </Column>
</main>
