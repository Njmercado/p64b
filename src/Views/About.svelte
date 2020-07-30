<script>
  import { onMount } from "svelte"
  import descriptionList from "../Data/MyDescription.js"
  import CircularGraph from "../Components/CircularGraph.svelte"
  import Container from "../Components/Grid/Container.svelte"
  import Row from "../Components/Grid/Row.svelte"

  function scrollTo(section) {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth"
    })
  }
  
  onMount(() => {
    const myAbilities = document.getElementById("myAbilities")
    const myAbilitiesFrontContent = document.getElementById("myAbilitiesFrontContent")
    const myAbilitiesBackContent = document.getElementById("myAbilitiesBackContent")
    const myAbilitiesDataBaseContent = document.getElementById("myAbilitiesDataBaseContent")
    const myShortCard = document.getElementById("myShortCard")
    myAbilities.style.display = "none"
    myAbilitiesFrontContent.style.display = "none"
    myAbilitiesBackContent.style.display = "none"
    myAbilitiesDataBaseContent.style.display = "none"
    myShortCard.style.display = "none"
    setTimeout(() => {
      myAbilities.style.display = "flex"
      myAbilitiesFrontContent.style.display = "flex"
      myAbilitiesBackContent.style.display = "flex"
      myAbilitiesDataBaseContent.style.display = "flex"
    myShortCard.style.display = "flex"
    }, 12 * 1000)
  })
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
  @media screen and (max-width: 600px) { #my-info { max-width: 90vw } }

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
    background-color: rgba(256, 256, 256, .4);
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
      transition-duration: .5s;
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
  <div id="myAbilities" class="flex h-center v-center bg-black min-height-100 title text-white">
    My Abilities
  </div>

  <div id="myAbilitiesFrontContent" class="bg-black min-height-100 flex h-center">
      <Container>
        <Row justify="center">
          <label class="subtitle text-white">Frontend</label>
        </Row>
        <Row>
          <CircularGraph color="#1C5496" size={200} legend="React" percentage={25}></CircularGraph>
          <CircularGraph color="#029A3F" size={200} legend="Vue" percentage={100}></CircularGraph>
          <CircularGraph color="#C27126" size={200} legend="Svelte" percentage={80}></CircularGraph>
        </Row>
        <Row>
          <CircularGraph color="#7EB0EC" size={100} legend="Material-UI" percentage={50}></CircularGraph>
          <CircularGraph color="#4E6E94" size={100} legend="Vuetify.js" percentage={90}></CircularGraph>
          <CircularGraph color="#98B5E1" size={100} legend="CSS3" percentage={80}></CircularGraph>
        </Row>
      </Container>
    </div>
  <div id="myAbilitiesBackContent" class="bg-black min-height-100 flex h-center">
      <Container>
        <Row justify="center">
          <label class="subtitle text-white">Backend</label>
        </Row>
        <Row>
          <CircularGraph color="#1C5496" size={200} legend="Golang" percentage={20}></CircularGraph>
          <CircularGraph color="#029A3F" size={200} legend="Python" percentage={50}></CircularGraph>
          <CircularGraph color="#029A3F" size={200} legend="Node" percentage={70}></CircularGraph>
        </Row>
        <Row>
          <CircularGraph color="#FFFFFF" size={100} legend="FastHttp" percentage={50}></CircularGraph>
          <CircularGraph color="#FFFFFF" size={100} legend="Flask" percentage={90}></CircularGraph>
          <CircularGraph color="#FFFFFF" size={100} legend="Express" percentage={80}></CircularGraph>
        </Row>
      </Container>
    </div>
  <div id="myAbilitiesDataBaseContent" class="bg-black min-height-100 flex h-center">
      <Container>
        <Row justify="center">
          <label class="subtitle text-white">Backend</label>
        </Row>
        <Row>
          <CircularGraph color="#029A3F" size={256} legend="MySQL" percentage={50}></CircularGraph>
          <CircularGraph color="#029A3F" size={256} legend="MongoDB" percentage={80}></CircularGraph>
        </Row>
      </Container>
    </div>
  <div id="myShortCard" class="bg-black min-height-100 flex h-center v-center">
    <Container>
      <Row>
        <img
          src="https://i.ibb.co/pnP84WX/me.jpg"
          alt="my perfil"
          class="my-image"
        >
      </Row>
      <Row> <label class="text-white" style="margin: 30px auto; font-size: 20px">Nino Mercado</label> </Row>
      <Row> <label class="text-white" style="font-size: 14px; margin: 8px auto">Software and Computer Engineer student</label> </Row>
      <Row> <label class="text-white" style="margin: 4px auto; font-size: 14px">github.com/njmercado</label> </Row>
    </Container>

  </div>
</div>