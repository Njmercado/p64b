<script>
  import Container from '../Components/Grid/Container.svelte'
  import Row from '../Components/Grid/Row.svelte'

  //Icons
  import TiSocialInstagram from 'svelte-icons/ti/TiSocialInstagram.svelte'
  import TiSocialGithub from 'svelte-icons/ti/TiSocialGithub.svelte'
  import TiSocialTwitter from 'svelte-icons/ti/TiSocialTwitter.svelte'
  import IoMdMail from 'svelte-icons/io/IoMdMail.svelte'

  export let id = ''
</script>

<style>
  .min-height-100 {
    min-height: 100vh;
  }

  .my-image {
    border-radius: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition-property: width height;
    transition-duration: 0.5s;
  }

  .text-white {
    color: white;
  }

  .icon-big {
    width: 32px;
    height: 32px;
  }

  .icon-small {
    width: 25px;
    height: 25px;
  }
</style>

<div {id} class="bg-black min-height-100 flex h-flex-center v-flex-center">
  <Container>
    <Row>
      <div style="width: 256px; height: 256px">
        <img
          src="https://i.ibb.co/pnP84WX/me.jpg"
          alt="my perfil"
          class="my-image" />
      </div>
    </Row>
    <Row>
      <label class="text-white font-size-small mt-1">
        Nino Mercado
      </label>
    </Row>
    <Row>
      <label class="text-white font-size-smaller mt-2">
        Software & Computer Engineer ( student )
      </label>
    </Row>
    <Row style="margin-top: 8px">
      <div class="icon-big text-white">
        <TiSocialInstagram />
      </div>
      <div class="icon-big text-white">
        <TiSocialGithub />
      </div>
      <div class="icon-big text-white">
        <TiSocialTwitter/>
      </div>
      <div class="icon-big text-white">
        <IoMdMail />
      </div>
    </Row>
  </Container>

</div>
