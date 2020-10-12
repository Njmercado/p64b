<script>
  import { onMount } from "svelte";
  const id = "button-" + Math.ceil(Math.random() * (1000 - 0));
  export let color = "white";
  export let textColor = 'black'
  export let textSize = ''
  export let round = "0px";
  export let size = ''

  export let target = '_blank'
  export let hrfe= ''

  export let click = ''

  function handleHRFE(button, url, target) {
    button.addEventListener('click', () => {
      window.open(url, target)
    })
  }

  function handleOnClick(button, func) {
    button.addEventListener('click', func)
  }

  function setSize(button, width) {
    button.style.width = width
  }

  function setBackgroundColor(button, color) {
    button.style.backgroundColor = color 
  }

  function setTextColor(button, color) {
    let btn = button.firstChild
    btn.style.color = color 
  }

  function setTextSize(button, size) {
    let btn = button.firstChild
    btn.style.fontSize = size
  }

  onMount(() => {
    let button = document.getElementById(id);
    button.style.borderRadius = round;

    if(color !== 'white') { setBackgroundColor(button, color) }
    if(textColor !== 'black') { setTextColor(button, textColor) }
    if(textSize.length > 0) setTextSize(button, textSize)
    if(size.length > 0) setSize(button, size)
    if(hrfe.length > 0) { handleHRFE(button, hrfe, target) }
    if(click) { handleOnClick(button, click) }
  });
</script>

<style>
  .btn-container {
    box-shadow: 2px 1px 8px rgba(0, 0, 0, 0.2);
    background-color: white;
    color: black;
    opacity: 1;

    display: flex;
    padding: 4px 16px;

    cursor: pointer;

    justify-content: space-around;
    align-items: center;

    transition-property: opacity;
    transition-duration: .5s;
  }
  .btn-container:hover {
    opacity: .8;
  }
  .btn-container:active > .btn {
    font-size: 12px;
  }

  .btn {
    font-size: 14px;
    transition-property: font-size;
    transition-duration: 0.5s;
  }
  .btn:active {
    font-size: 12px;
  }
</style>

<div {id} class="btn-container">
  <div class="btn flex flex-center">
    <slot />
  </div>
</div>
