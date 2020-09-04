<script>
  import Container from '../../Components/Grid/Container.svelte'
  import Row from '../../Components/Grid/Row.svelte'
  import Column from '../../Components/Grid/Column.svelte'

  import RouterFloatingButton from "../../Components/RouterFloatingButton.svelte"

  import Works from '../../Data/ListOfWorks.js'

  const kribiWorkData = Works[0]
  // Copying this array
  let kribiTechUsed = [...kribiWorkData.techs]
  kribiTechUsed.push('DigitalOcean')
  kribiTechUsed.push('Ubuntu')
  kribiTechUsed.push('Docker')

  const kribiTechUsedLenght = kribiTechUsed.length
</script>

<style>
  :root {
    --kribi-yellow: #daab05;
  }

  #kribi-work-page {
    background-color: var(--kribi-yellow);
    min-height: 100vh;
  }

  #kribi-work-page div {
    line-height: 1.4;
  }

  #kribi-work-page img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 16px;
  }
  .entry-paragraph {
    width: calc(80% - 16vw);
  }

  .tech-item {
      background-color: white;
      color: black;
      font-weight: bold;
      padding: 10px;
      margin: 8px;
      border-radius: 16px;
  }
</style>

<div id="kribi-work-page">

  <RouterFloatingButton></RouterFloatingButton>

  <Container>
    <Row height="100vh">
      <div class="font-size-smaller text entry-paragraph">
        Kribí is an e-learning tool used to learn Palenque slang. This tool let
        you to access to Palenque Dictionary, alogn with a bunch of Articles and
        Jourlans. This project let you see how amazing this culture is and learn
        from it.
      </div>
    </Row>

    <Row height="auto" style="margin: 4em 10%">
      <Container columns="2">
        <Column columns="2" xs="2" sm="2" md="1" lg="1" xl="1">
          <div class="text font-size-smaller">
            This tool could be used on many different screen sizes 
            thanks to Vuetify material UI Framework. This mean this solution is
            completely responsive. For example...
          </div>
        </Column>
        <Column columns="2" xs="2" sm="2" md="1" lg="1" xl="1">
          <div style="width: 40%; margin: 4em">
            <img
              src="https://i.ibb.co/CbtFnm8/kribi-com-co-kajangar-5.png"
              alt="mobile dictionary version" />
          </div>
        </Column>
      </Container>
    </Row>

    <Row height="auto" style="margin: 4em 10%">
      <div style="width: 40%">
        <img
          src="https://i.ibb.co/4W1JTdF/kribi-com-co-kajangar-i-Pad.png"
          alt="ipad dictionary version" />
      </div>
    </Row>
    <Row height="auto" style="margin: 4em 10%">
      <div style="width: 80%">
        <img
          src="https://i.ibb.co/sjLdFdq/Screen-Shot-2020-09-03-at-19-01-55.png"
          alt="ipad dictionary version" />
      </div>
    </Row>
    <Row height="100vh" style="background-color: black">
      <Container columns={Math.floor(kribiTechUsedLenght)}>
        {#each kribiTechUsed as item}
            <Column columns={2} xs={2} sm={2} md={2} lg={2} xl={2}>
                <div class="tech-item font-size-small">
                    {item}
                </div>
            </Column>
        {/each}
      </Container>
    </Row>
  </Container>
</div>
