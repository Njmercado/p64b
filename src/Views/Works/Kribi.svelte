<script>
  import Button from "../../Components/Button.svelte";
  import Card from "../../Components/Card.svelte";

  import RouterFloatingButton from "../../Components/RouterFloatingButton.svelte";

  import Works from "../../Data/ListOfWorks.js";

  import DiGithubBadge from "svelte-icons/di/DiGithubBadge.svelte";
  import MdOpenInNew from "svelte-icons/md/MdOpenInNew.svelte";

  const kribiWorkData = Works[0];
  // Copying this array
  let kribiTechUsed = [...kribiWorkData.techs];
  kribiTechUsed.push("DigitalOcean");
  kribiTechUsed.push("Ubuntu");
  kribiTechUsed.push("Docker");

  const kribiTechUsedLenght = kribiTechUsed.length;
</script>

<style>
  :root {
    --kribi-yellow: #daab05;
  }

  #kribi-work-page {
    background-color: var(--kribi-yellow);
  }

  #kribi-work-page img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 16px;
  }
</style>

<div id="kribi-work-page" class="px-3 min-h-screen">
  <RouterFloatingButton />

  <div class="min-h-screen flex flex-column h-flex-center">
    <div class="font-size-small text">
      <div class="font-size-big" style="width: 100%">Kribí</div>
      <div class="mt-5">
        Kribí is an e-learning tool used to learn Palenque slang. This tool let
        you to access to Palenque Dictionary, alogn with a bunch of Articles and
        Jourlans. This project let you see how amazing this culture is and learn
        from it.
      </div>
    </div>
    <div class="flex h-flex-start mt-5">
      <Button textSize="calc(12px + .8vw)" round="16px">
        <div class="flex mr-1" style="max-width: 32px; max-height: 32px">
          <MdOpenInNew />
        </div>
        <div class="font-bolder flex flex-center">Visit page</div>
      </Button>
      <div class="ml-2" />
      <Button textSize="calc(12px + .8vw)" round="16px">
        <div class="flex mr-1" style="max-width: 32px; max-height: 32px">
          <DiGithubBadge />
        </div>
        <div class="font-bolder flex flex-center">Look Github</div>
      </Button>
    </div>
  </div>

  <div class="font-size-big">Few Shots</div>
  <div class="text font-size-smaller mt-1 font-bold">
    This tool could be used on many different screen sizes thanks to Vuetify
    material UI Framework. This mean this solution is completely responsive. For
    example...
  </div>
  <!-- shots -->
  <div class="grid grid-8-columns h-flex-center v-flex-end mt-5">
    <div class="xs-8 sm-8 md-5 lg-5">
      <Card color="white" height="auto" width="auto">
        <div slot="title">
          <img
            src="https://i.ibb.co/sjLdFdq/Screen-Shot-2020-09-03-at-19-01-55.png"
            alt="pc dictionary version" />
        </div>
      </Card>
    </div>
    <div class="xs-8 sm-8 md-2 lg-2">
      <Card color="white" width="auto" height="auto">
        <div slot="title">
          <img
            src="https://i.ibb.co/4W1JTdF/kribi-com-co-kajangar-i-Pad.png"
            alt="ipad dictionary version" />
        </div>
      </Card>
    </div>
    <div class="xs-8 sm-8 md-1 lg-1">
      <Card color="white" width="128px" height="256px">
        <div slot="title">
          <img
            style="width: 128px; height: 256px"
            src="https://i.ibb.co/CbtFnm8/kribi-com-co-kajangar-5.png"
            alt="mobile dictionary version" />
        </div>
      </Card>
    </div>
  </div>
  <div class="mt-4">.</div>
</div>
<div class="h-screen flex flex-center mt-5">
  <div class="grid grid-4-columns">
    {#each kribiTechUsed as item}
      <div class="chip-lg chip xs-4 sm-2 md-2 lg-1">{item}</div>
    {/each}
  </div>
</div>
