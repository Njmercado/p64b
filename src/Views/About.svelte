<script>
  import { onMount } from "svelte";
  import descriptionList from "../Data/MyDescription.js";
  import ListOfTechs from "../Data/ListOfTechs.js";

  import CircularGraph from "../Components/CircularGraph.svelte";
  import Container from "../Components/Grid/Container.svelte";
  import Row from "../Components/Grid/Row.svelte";
  import Column from "../Components/Grid/Column.svelte";

  import MyCardInfo from '../Components/MyCardInfo.svelte'

  import RouterFloatingButton from "../Components/RouterFloatingButton.svelte"

  //Icons
  import MdKeyboardArrowDown from 'svelte-icons/md/MdKeyboardArrowDown.svelte'

  function scrollTo(section) {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
  }

  function setDisplay(el, display) { el.style.display = display; }
  function handleShowAbilitiesContent() {
    const myAbilities = document.querySelectorAll("#myAbilities");
    const myShortCard = document.getElementById("myShortCard");
    setDisplay(myShortCard, "none")
    myAbilities.forEach(el => setDisplay(el, "none"))
    setTimeout(() => {
      setDisplay(myShortCard, "flex")
      myAbilities.forEach(el => setDisplay(el, "flex"))
    }, 12 * 1000);
  }

  const smallGraphSize = () => window.innerWidth <= 600 ? 75 : 100;
  const normalGraphSize = () => window.innerWidth <= 600 ? 150 : 200;
  const bigGraphSize = () => window.innerWidth <= 600 ? 200 : 256;

  onMount(() => {
    handleShowAbilitiesContent();
  });
</script>

<style>
  :root {
    --font-size: 16px;
  }

  .bg-black {
    background-color: black;
  }
  .min-height-100 {
    min-height: 100vh;
  }
  .text-white {
    color: white;
  }

  #my-info {
    max-width: 64vw;
    position: absolute;
  }
  @media screen and (max-width: 600px) {
    #my-info {
      max-width: 90vw;
    }
  }

  .logo {
    width: 256px;
    height: 256px;
  }
  .floating-icon {
    position: absolute;
    bottom: 2em;
    left: 48.5vw;
    font-size: 32px;
    cursor: pointer;
    opacity: 0;
    color: white;
    transition-property: font-size color background-color;
    transition-duration: 1s;
  }
  .floating-icon:active {
    background-color: rgba(256, 256, 256, 0.4);
    color: black;
    padding: 4px;
    font-size: 35px;
    border-radius: 100px;
    left: 48.3vw;
  }
  .info {
    font-size: var(--font-size);
  }
</style>

<div id="about-page">

  <RouterFloatingButton></RouterFloatingButton>

  <div class="min-height-100 bg-black main-container flex h-flex-center v-flex-center">
    <!-- Logo -->
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img
        class="logo zoom-out-animation"
        style="--animation-duration: 1s"
        src="https://i.ibb.co/5FSCmnj/Screenshot-20200728-215136.png"
        alt="logo image"
      />

    <!-- Description -->
    <div id="my-info" class="text-white">
      <div class="info fade-in-animation" style="--font-size: 48px; --animation-delay: 3s"> { descriptionList[0] } </div>
      <div class="info fade-in-animation mt-1" style="--animation-delay: 5s"> { descriptionList[1] } </div>
      <div class="info fade-in-animation mt-1" style="--animation-delay: 7s"> { descriptionList[2] } </div>
      <div class="info fade-in-animation mt-1" style="--animation-delay: 9s"> { descriptionList[3] } </div>
    </div>
    <div
      class="floating-icon shake-animation"
      style="--animation-delay: 11s; width: 32px; height: 32px;"
      on:click={() => scrollTo("myAbilities") }
    >
      <MdKeyboardArrowDown />
    </div>
  </div>

  <!-- My abilities -->
  <div
    id="myAbilities"
    class="flex h-flex-center v-flex-center bg-black min-height-100 title text-white">
    My Abilities
  </div>

  <!-- My Frontend Abilities -->
  <div
    id="myAbilities"
    class="bg-black min-height-100 flex h-flex-center">
    <Container columns={ListOfTechs.Frontend.length}>
      <Row>
        <label class="subtitle text-white">Frontend</label>
      </Row>

      {#each ListOfTechs.Frontend as { tech, techPercentage, color, framework, frameworkPercentage, frameworkColor }}
        <Column xs={ListOfTechs.Frontend.length}>
          <CircularGraph
            {color}
            size={normalGraphSize()}
            legend={tech}
            showPercentage={false}
            percentage={techPercentage} />
          <div class="mt-1" />
          <CircularGraph
            color={frameworkColor}
            size={smallGraphSize()}
            legend={framework}
            showPercentage={false}
            percentage={frameworkPercentage} />
        </Column>
      {/each}
    </Container>
  </div>

  <!-- My Backend Abilities -->
  <div
    id="myAbilities"
    class="bg-black min-height-100 flex h-flex-center">
    <Container columns={ListOfTechs.Backend.length}>
      <Row>
        <label class="subtitle text-white">Backend</label>
      </Row>

      {#each ListOfTechs.Backend as { tech, techPercentage, color, framework, frameworkPercentage, frameworkColor }}
        <Column xs={ListOfTechs.Backend.length}>
          <CircularGraph
            {color}
            size={normalGraphSize()}
            legend={tech}
            showPercentage={false}
            percentage={techPercentage} />
          <div class="mt-1" />
          <CircularGraph
            color={frameworkColor}
            size={smallGraphSize()}
            legend={framework}
            showPercentage={false}
            percentage={frameworkPercentage} />
        </Column>
      {/each}
    </Container>
  </div>

  <!-- My DataBase Abilities -->
  <div
    id="myAbilities"
    class="bg-black min-height-100 flex h-flex-center">
    <Container columns={ListOfTechs.DataBase.length}>
      <Row>
        <label class="subtitle text-white">Backend</label>
      </Row>
      {#each ListOfTechs.DataBase as { tech, techPercentage, color }}
        <Column xs={ListOfTechs.DataBase.length}>
          <CircularGraph
            {color}
            size={bigGraphSize()}
            legend={tech}
            showPercentage={false}
            percentage={techPercentage} />
        </Column>
      {/each}
    </Container>
  </div>

  <MyCardInfo id="myShortCard"></MyCardInfo>
</div>
