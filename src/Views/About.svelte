<script>
  import { onMount } from "svelte";
  import descriptionList from "../Data/MyDescription.js";
  import ListOfTechs from "../Data/ListOfTechs.js";

  import CircularGraph from "../Components/CircularGraph.svelte";
  import Container from "../Components/Grid/Container.svelte";
  import Row from "../Components/Grid/Row.svelte";
  import Column from "../Components/Grid/Column.svelte";

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
  .flex {
    display: flex;
  }
  .h-center {
    justify-content: center;
  }
  .v-center {
    align-items: center;
  }
  .mt-1 {
    margin-top: 1em;
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

  .my-image {
    border-radius: 100%;
    width: 128px;
    height: 128px;
    transition-property: width height;
    transition-duration: 0.5s;
  }
  .my-image:hover {
    width: 256px;
    height: 256px;
  }
</style>

<div id="min-height-100 about-container">
  <div class="min-height-100 bg-black main-container flex h-center v-center">
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
    <i
      class="material-icons floating-icon shake-animation"
      style="--animation-delay: 11s"
      on:click={() => scrollTo("myAbilities") }
    >keyboard_arrow_down</i>
  </div>

  <!-- My abilities -->
  <div
    id="myAbilities"
    class="flex h-center v-center bg-black min-height-100 title text-white">
    My Abilities
  </div>

  <!-- My Frontend Abilities -->
  <div
    id="myAbilities"
    class="bg-black min-height-100 flex h-center">
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
            percentage={techPercentage} />
          <div class="mt-1" />
          <CircularGraph
            color={frameworkColor}
            size={smallGraphSize()}
            legend={framework}
            percentage={frameworkPercentage} />
        </Column>
      {/each}
    </Container>
  </div>

  <!-- My Backend Abilities -->
  <div
    id="myAbilities"
    class="bg-black min-height-100 flex h-center">
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
            percentage={techPercentage} />
          <div class="mt-1" />
          <CircularGraph
            color={frameworkColor}
            size={smallGraphSize()}
            legend={framework}
            percentage={frameworkPercentage} />
        </Column>
      {/each}
    </Container>
  </div>

  <!-- My DataBase Abilities -->
  <div
    id="myAbilities"
    class="bg-black min-height-100 flex h-center">
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
            percentage={techPercentage} />
        </Column>
      {/each}
    </Container>
  </div>

  <div id="myShortCard" class="bg-black min-height-100 flex h-center v-center">
    <Container>
      <Row>
        <img
          src="https://i.ibb.co/pnP84WX/me.jpg"
          alt="my perfil"
          class="my-image" />
      </Row>
      <Row>
        <label class="text-white" style="margin: 30px auto; font-size: 20px">
          Nino Mercado
        </label>
      </Row>
      <Row>
        <label class="text-white" style="font-size: 14px; margin: 8px auto">
          Software and Computer Engineer student
        </label>
      </Row>
      <Row>
        <label class="text-white" style="margin: 4px auto; font-size: 14px">
          github.com/njmercado
        </label>
      </Row>
    </Container>

  </div>
</div>
