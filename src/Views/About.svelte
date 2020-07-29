<script>
  import { onMount } from "svelte";
  import Logo from "../Components/Logo.svelte";

  let descriptionList = [
    "hola",
    "My name is Nino. I am a Software and Computer Engineer student. Currently I am in my last College year.",
    `
        I consider myself as a tinny Geek person. Even though I enjoy 
        searching for new tech, those which could
        make our lives easier, I also invest my time 
        into big diversity of topics like Economy, Psicology and Art.
    `,
    `
        My developer abilities goes right through 
        Frontend to Backend area. However, I also 
        have great interests into Machine Learning world.
    `
  ];

  let currentDescription = descriptionList[0]
</script>

<style>
  .bg-black {
    background-color: black;
  }
  .main-container {
    min-height: 100vh;
  }
  .round-borders {
    border-radius: 16px;
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Logo keyFrames */
  @keyframes logo-hidde {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
      width: 0;
      height: 0;
    }
  }
  @-moz-keyframes logo-hidde {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
      width: 0;
      height: 0;
    }
  }
  @-webkit-keyframes logo-hidde {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      display: none;
      width: 0;
      height: 0;
    }
  }
  .logo {
    animation: logo-hidde 1s forwards;
    animation-delay: 2s;
    -moz-animation: logo-hidde 1s forwards;
    -moz-animation-delay: 2s;
    -webkit-animation: logo-hidde 1s forwards;
    -webkit-animation-delay: 2s;
  }

  /* Image keyFrame */
  @keyframes image-show {
    50%,
    100% {
      opacity: 1;
      height: 60vh;
      width: 40vw;
    }
    100% {
      transform: translateX(calc(128px + 16vw));
    }
  }
  @-moz-keyframes image-show {
    50%,
    100% {
      opacity: 1;
      height: 60vh;
      width: 40vw;
    }
    100% {
      transform: translateX(calc(128px + 16vw));
    }
  }
  @-webkit-keyframes image-show {
    50%,
    100% {
      opacity: 1;
      height: 60vh;
      width: 40vw;
    }
    100% {
      transform: translateX(calc(128px + 16vw));
    }
  }
  .image {
    animation: image-show 4s forwards;
    animation-delay: 3s;
    -moz-animation: image-show 4s forwards;
    -moz-animation-delay: 3s;
    -webkit-animation: image-show 4s forwards;
    -webkit-animation-delay: 3s;

    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  #my-info {
    max-width: 30vw;
    position: absolute;
    transform: translateX(calc(-16em - 3em));
  }

  @-moz-keyframes info-animate {
    100% {
      font-size: 16px;
      opacity: 1;
    }
  }
  @keyframes info-animate {
    100% {
      font-size: 16px;
      opacity: 1;
    }
  }
  @-webkit-keyframes info-animate {
    100% {
      font-size: 16px;
      opacity: 1;
    }
  }
  .info {
    animation: info-animate 4s forwards;
    animation-delay: 6s;

    -moz-animation: info-animate 4s forwards;
    -moz-animation-delay: 6s;

    -webkit-animation: info-animate 4s forwards;
    -webkit-animation-delay: 6s;

    opacity: 0;
    font-size: 0;
    color: white;
  }

  /* Configuration for small screens */

  @media screen and (max-width: 600px) {
    /* Image keyFrame */
    @keyframes image-show {
      100% {
        opacity: 1;
        height: 40vh;
        width: 90vw;
        transform: translateY(-128px);
      }
    }
    @-moz-keyframes image-show {
      100% {
        opacity: 1;
        height: 40vh;
        width: 90vw;
        transform: translateY(-128px);
      }
    }
    @-webkit-keyframes image-show {
      100% {
        opacity: 1;
        height: 40vh;
        width: 90vw;
        transform: translateY(-128px);
      }
    }

    #my-info {
      max-width: 90vw;
      position: absolute;
      transform: translateY(calc(25vh + 16px));
    }
  }
</style>

<div id="about-container" class="bg-black main-container center">
  <!-- Logo -->
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img
    class="logo round-borders"
    src="https://i.ibb.co/5FSCmnj/Screenshot-20200728-215136.png"
    alt="logo image" />

  <!-- Description -->
  <div id="my-info">
    <div class="info">
      <label>{ currentDescription }</label>
    </div>
  </div>

  <!-- My Image -->
  <!-- svelte-ignore a11y-img-redundant-alt -->
  <img
    class="image round-borders"
    src="https://i.ibb.co/pnP84WX/Pics-Art-05-12-12-40-28.jpg"
    alt="my photo" />
</div>
