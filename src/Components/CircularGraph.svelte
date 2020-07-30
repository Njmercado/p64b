<script>
    import { onMount } from 'svelte'
    const id = "circular-graph-" + Math.ceil(Math.random() * (1000 - 0));

    export let color = "blue"
    export let percentage = 100
    export let size = 100
    export let legend= ""

    function handleCanvasText(canvas, fontSize) {
        let ctx = canvas.getContext("2d")
        ctx.font=`${fontSize / 8}px sans-serif`
        ctx.fillStyle = "white"
        ctx.textAlign = "center"
        ctx.fillText(`${percentage}%`, size / 2, size / 1.8);
    }

    function handleCanvasStyles(canvas, lineWidth) {
        const percentage2Deg = 360 / ( 100 / percentage )
        let ctx = canvas.getContext("2d")

        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2.4, 270 * (Math.PI/180), 2 * Math.PI + 270 * (Math.PI/180));
        ctx.strokeStyle = color + "66"
        ctx.lineWidth = lineWidth / 10
        ctx.stroke(); 

        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2.4, 270 * (Math.PI/180), percentage2Deg * (Math.PI/180) + 270 * (Math.PI/180));
        ctx.strokeStyle = color
        ctx.lineWidth = lineWidth / 10
        ctx.lineCap = "round"
        ctx.stroke(); 
    }

    onMount(() => {
        let canvas = document.getElementById(id)
        handleCanvasStyles(canvas, size)
        handleCanvasText(canvas, size)
    })
</script>

<style>
    .text-white { color: white }
    .center { display: flex; justify-content: center; align-items: center; }
    .mx-1 { margin: 0 2em; }
</style>

<div>
    <canvas id={id} class="mx-1" width="{size}px" height="{size}px"></canvas>
    <label class="center mt-1 text-white fade-in-animation" style="font-size: {size / 8}px; --animation-delay: .5s"> { legend } </label>
</div>