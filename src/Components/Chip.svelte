<script>
  import { onMount } from 'svelte'

  const id = "chip-" + Math.ceil(Math.random() * (1000 - 0));

  export let color = ''
  export let textColor = ''
  export let textWeight = ''

  function setColor(chip, color) {
    chip.style.backgroundColor = color
  }

  function setTextColor(chip, color) {
    chip.style.color = color
  }

  function setTextWeight(chip, weight) {
    chip.style.fontWeight = weight
  }

  onMount(() => {
    let chip = document.getElementById(id)
    if(color.length > 0) setColor(chip, color)
    if(textColor.length > 0) setTextColor(chip, textColor)
    if(textWeight.length > 0) setTextWeight(chip, textWeight)
  })

</script>

<style>
  .chip {
    min-width: 4em;
    background-color: white;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
    color: black;
    border-radius: 16px;
    margin: 4px;
    padding: 4px 8px;
    font-size: 14px;
  }
</style>

<div id={id} class="chip"><slot><!-- optional fallback --></slot></div>