<script>
  import { onMount } from "svelte";
  const id = "card-" + Math.ceil(Math.random() * (1000 - 0));

  export let size = "";
  export let width = "256px";
  export let height = "256px";
  export let color = "red";
  export let textColor = "rgb(10, 10, 10)";

  function setSize(card) {
    card.style.minWidth = size || width;
    card.style.minHeight = size || height;
  }

  function setBackgroundColor(card) {
    card.style.backgroundColor = color;
  }

  function setTextColor(card) {
    card.style.color = textColor;
  }

  onMount(() => {
    let card = document.getElementById(id);
    setSize(card);
    setBackgroundColor(card);
    setTextColor(card);
  });
</script>

<style>
  .card {
    border-radius: 16px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    margin: 8px;
    cursor: pointer;
    padding: 4px;
    -webkit-transition-property: box-shadow;
    -moz-transition-property: box-shadow;
    -o-transition-property: box-shadow;
    transition-property: box-shadow;
    -webkit-transition-duration: 0.8s;
    -moz-transition-duration: 0.8s;
    -o-transition-duration: 0.8s;
    transition-duration: 0.8s;
  }
  .card:hover {
    box-shadow: 4px 6px 6px 4px rgba(0, 0, 0, 0.4);
  }
  .card > div {
    height: 100%;
    width: 100%;
  }

  .card-title {
    font-weight: bold;
  }
  .card-subtitle {
    font-weight: 400;
    font-size: initial;
  }
  .card-content {
    font-weight: 300;
    font-size: small;
    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>

<div {id} class="card">
  <div id="card-content-wrapper" class="flex flex-column v-flex-column-spacer">
    <div class="card-title">
      <slot name="title" />
    </div>
    <div class="card-subtitle">
      <slot name="subtitle" />
    </div>
    <div class="card-content">
      <slot name="content" />
    </div>
    <div class="card-buttons">
      <slot name="buttons" />
    </div>
  </div>
</div>
