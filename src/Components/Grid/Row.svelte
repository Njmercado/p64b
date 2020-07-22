<script>
  import { onMount, afterUpdate } from "svelte";

  const id = "row-" + Math.ceil(Math.random() * (1000 - 0));

  export let height = "auto";
  export let align = "center";
  export let justify = "space-around";
  export let style = "";
  let columns = 8;

  function getParentColumns(parent) {
    return parent.getAttribute("columns");
  }

  function getParent(id) {
    return document.getElementById(id).parentElement;
  }

  onMount(() => {
    const parent = getParent(id);
    columns = getParentColumns(parent);
  });

</script>

<style>
  .container-row {
    display: flex;
    flex-direction: row;
  }
</style>

<div
  style={`
        display: grid;
        grid-column: span ${columns};
        min-height: ${height};
        ${style}
    `}
  {id}>
  <div
    class="container-row"
    style={`
         align-items: ${align};
        justify-content: ${justify};     
    `}>
    <slot>
      <!-- optional fallback -->
    </slot>
  </div>
</div>
