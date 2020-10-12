<script>
  import { push } from "svelte-spa-router";
  import Column from "../Components/Grid/Column.svelte";
  import Container from "../Components/Grid/Container.svelte";
  import Logo from "../Components/Logo.svelte";
  import Button from "../Components/Button.svelte";
  import Avatar from "../Components/Avatar.svelte";
  import Card from "../Components/Card.svelte";
  import RouterFloatingButton from "../Components/RouterFloatingButton.svelte";
  import ListOfWorks from "../Data/ListOfWorks.js";
  import {short_description as techs} from "../Data/ListOfTechs.js";

  //Icons 
  import MdMailOutline from 'svelte-icons/md/MdMailOutline.svelte'
  import MdFileDownload from 'svelte-icons/md/MdFileDownload.svelte'
  import FaPaypal from 'svelte-icons/fa/FaPaypal.svelte'

  import MyCardInfo from "../Components/MyCardInfo.svelte";
</script>

<style>
  :root {
    --translate-y: 10px;
  }

  .flex-container {
    display: flex;
    flex-direction: row;
    min-height: 70vh;
  }

  .hover-translateY {
    transition-property: transform;
    transition-duration: 0.8s;
  }

  .hover-translateY:hover {
    transform: translateY(var(--translate-y));
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
        <Button textColor="rgba(0, 0, 0, .8)" round="16px" click={() => push('/about')}>
          <div class="font-bolder">more</div>
        </Button>
    </Column>
    <Column height="100vh" columns={1} xs={2} style="background-color: white">
      <Logo width={384} height={384} weight={4} />
    </Column>
  </Container>

    <!-- Large Description -->
  <div id="contentContainer" class="px-2">

    <div class="mt-8 text-white text-left">
      <div class="font-size-extrabigger">About me</div>
      <div class="font-size-small">
        Hola, my name in Nino Mercado, i’m a fullstack web developer and freelancer
      </div>
      <div class="font-size-smaller mt-4">
        Also, i am a Software and Computer Engineer student. Currently I am in my last College year. <br/>
        My developer abilities goes right through Frontend to Backend area. However, I also 
        have great interests into Machine Learning field. <br/>
        This are some of the techs than i used to use in my daily work:
      </div>

      <!-- List of Techs than i know -->
      <div class="mt-4 grid grid-4-columns">
        {#each techs as tech}
          <div class="xs-4 sm-2 chip chip-sm font-bold">{tech}</div>
        {/each}
      </div>
      <div class="text-white font-size-smaller mt-4">
        I consider myself as a tinny Geek person. 
        Even though I enjoy searching for new tech, those which could make our lives easier, 
        I also invest my time into big diversity of topics like Economy, Psicology and Art.
      </div>

      <!-- Action buttons -->
      <div class="flex h-flex-start mt-4">
        <Button
          textColor="rgba(0, 0, 0, .8)"
          round="16px"
          textSize="calc(12px + .8vw)"
        >
          <div class="flex mr-1" style="max-width: 25px; max-height: 25px"> <MdMailOutline/> </div>
          <div class="font-bolder flex flex-center">Email me</div>
        </Button>
        <div class="ml-2"></div>
        <Button
          textColor="rgba(0, 0, 0, .8)"
          round="16px"
          textSize="calc(12px + .8vw)"
        >
          <div class="flex mr-1" style="max-width: 25px; max-height: 25px"> <MdFileDownload/> </div>
          <div class="font-bolder flex flex-center">Download my resume</div>
        </Button>
      </div>
    </div>

    <!-- buy a coffe block -->
    <div class="mt-8 text-white text-left">
      <div class="font-size-big text-white mt-2">What if you buy a coffe? :)</div>
      <div class="flex h-flex-start mt-4">
        <Button
          textColor="rgba(0, 0, 0, .8)"
          round="16px"
          textSize="calc(12px + .8vw)"
        >
          <div class="flex mr-1" style="max-width: 25px; max-height: 25px"> <FaPaypal/> </div>
          <div class="font-bolder flex flex-center">Paypal</div>
        </Button>
      </div>
    </div>

    <div class="font-size-extrabigger text-white mt-2">Top Projects</div>

    <!-- List of Works -->
    <div class="flex-container h-flex-center v-flex-center">
      <Container columns="3">
        {#each ListOfWorks as { title, src, description, techs, background, projectDescriptionSite, site }, index}
          <Column columns="3" xs="3" sm="3" md="1" lg="1" xl="1">
            <div class="hover-translateY" style="--translate-y: -16px" on:click={() => push(projectDescriptionSite)}>
              <Card color={background} textColor="white" size="calc(10em + 16vw)">
                <div slot="title">
                  <Avatar width="calc(2em + 10vw)" height="calc(2em + 10vw)" {src} />
                </div>
                <div class="font-size-bigger text-center font-bolder" slot="subtitle">
                  {title}
                </div>
                <div
                  class="font-size-small font-bold text-center"
                  style="color: rgba(256, 256, 256, .6)"
                  slot="content">
                  {description}
                </div>
              </Card>
            </div>
          </Column>
        {/each}
      </Container>
    </div>
    <!-- Button to Works -->
    <div class="mt-5 flex h-flex-center">
      <Button
        textColor="rgba(0, 0, 0, .8)"
        round="16px"
        textSize="calc(12px + 1vw)"
        click={() => push('/works')}>
        <div class="font-bolder">Discover more projects</div>
      </Button>
    </div>

    <!-- Contact Me -->
    <Column height="100vh" style="background-color: rgb(10, 10, 10)">
      <MyCardInfo id="myCard"></MyCardInfo>
    </Column>
  </div>
</main>
