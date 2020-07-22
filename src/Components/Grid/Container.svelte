<script>
  const id = "container-" + Math.ceil(Math.random() * (1000 - 0));
  export let columns = 8;
  export let justify = "center";
  export let align = "center";
  export let style = "";

  // Whatchers
  // $: updatedColumn(columns)

  //events
  export let click = function(){}
  export let mouseOver= function(){}
</script>

<div
  {id}
  style={`
    justify-content: ${justify};
    align-items: ${align};
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr)
    ${style}
  `}
  {columns}
  on:click={click}
  on:mouseover={mouseOver}
>
  <slot />
</div>
