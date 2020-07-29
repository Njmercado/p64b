<script>
  import { onMount } from "svelte";

  const id = "canvas-" + Math.ceil(Math.random() * (1000 - 0));

  export let width = 100;
  export let height = 100;
  export let weight = 2;
  export let color = "black";
  export let className = "";

  function updateLogo() {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = weight;

    // VERTICAL

    // vertical line before before main one
    ctx.moveTo(width / 4, 0);
    ctx.lineTo(width / 4, height);

    // vertical line before main one
    ctx.moveTo(width * (3 / 8), height * (3 / 8));
    ctx.lineTo(width * (3 / 8), height / 2);

    // MAIN VERTICAL LINE
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);

    // vertical line after main one
    ctx.moveTo(width * (5 / 8), height * (3 / 8));
    ctx.lineTo(width * (5 / 8), height / 2);

    // vertical line after after main one
    ctx.moveTo(width * (3 / 4), 0);
    ctx.lineTo(width * (3 / 4), height);

    // HORIZONTAL

    //horizontal line before before main one
    ctx.moveTo(width / 4, height * (3 / 8));
    ctx.lineTo(width * (3 / 4), height * (3 / 8));

    //horizontal line before main one
    ctx.moveTo(width / 4, height / 4);
    ctx.lineTo(width * (3 / 4), height / 4);

    // MAIN HORIZONTAL LINE
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);

    //horizontal line after main one
    ctx.moveTo(width / 4, height * (3 / 4));
    ctx.lineTo(width * (3 / 4), height * (3 / 4));

    ctx.strokeStyle = color;
    ctx.stroke();
  }

  onMount(() => {
    updateLogo();
  });
</script>

<div class={`${className}`}>
  <canvas {id} {width} {height} />
</div>
