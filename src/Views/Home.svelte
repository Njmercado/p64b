<script>
  import { push } from 'svelte-spa-router'
  import Column from "../Components/Grid/Column.svelte";
  import Container from "../Components/Grid/Container.svelte";
  import Row from "../Components/Grid/Row.svelte";
  import Logo from "../Components/Logo.svelte";
  import Button from "../Components/Button.svelte";
  import Avatar from "../Components/Avatar.svelte";
  import Chip from "../Components/Chip.svelte";
  import TextField from "../Components/TextField.svelte";
  import TextArea from "../Components/TextArea.svelte";
  import RouterFloatingButton from "../Components/RouterFloatingButton.svelte"
  import ListOfWorks from "../Data/ListOfWorks.js";

  import MyCardInfo from '../Components/MyCardInfo.svelte'
</script>

<style>
  .flex-container {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
  }
  .flex-item {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: space-around;
    text-align: center;
    transition-property: flex;
    transition-duration: 1s;
  }
  .flex-item:hover {
    flex: 2;
  }
  .flex-item:hover .work-title {
    font-size: 4em;
  }
  .flex-item:hover .work-info-container {
    display: block;
  }

  @media screen and (max-width: 600px) {
    .flex-container {
      flex-direction: column;
    }
    .flex-item {
      flex-direction: row;
      align-items: center;
      padding: 1em 0;
    }
    .flex-item:hover {
      flex-direction: column;
      flex: 5;
    }
  }

  .work-title {
    color: white;
    font-weight: 400;
    font-size: 3em;
  }
  .work-info-container {
    display: none;
  }
  .work-description {
    padding: 0 16%;
    margin-bottom: 2em;
  }
  .work-techs-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
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
      style="background-color: black; color: white">
      <h1 class="text title">THIS IS P64B</h1>
      <h3 class="text italic">just another</h3>
      <h2 class="text subtitle">Full Stack Web Developer</h2>
      <Button textColor="rgba(0, 0, 0, .8)" round="16px" click={() => push('/about')}>more</Button>
    </Column>
    <Column height="100vh" columns={1} xs={2}>
      <Logo width={384} height={384} weight={4} />
    </Column>
  </Container>

  <!-- Works -->
  <div class="flex-container">
    {#each ListOfWorks as { title, src, description, techs, background, site }, index}
      <div class="flex-item" style={`background-color: ${background}`}>
        <Avatar width="12em" height="12em" {src} />
        <div class="work-title">{title}</div>
        <div class="work-info-container">
          <div
            class="work-description"
            style={`color: rgba(256, 256, 256, ${(8 - (index + 1)) / 10})`}>
            {description}
          </div>
          <div class="work-techs-container">
            {#each techs as item}
              <Chip textColor="rgba(0, 0, 0, .8)">{item}</Chip>
            {/each}
          </div>
        </div>
        <Button textColor="rgba(0, 0, 0, .8)" round="16px" hrfe={site}>Visit</Button>
      </div>
    {/each}
  </div>

  <!-- Contact Me -->
  <Column height="100vh" style="background-color: black">
    <MyCardInfo id="myCard"></MyCardInfo>
  </Column>
</main>
