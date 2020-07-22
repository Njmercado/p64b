<script>
  import { onMount, afterUpdate } from "svelte";

  //Variables and Const
  const id = "col-" + Math.ceil(Math.random() * (1000 - 0));

  //Parameters
  export let height = "auto";
  export let columns = 1;
  export let xs = 1, sm = 1, md = 1, lg = 1, xl = 1;
  export let align = "center";
  export let justify = "center";
  export let style = "";

  //Functions
  const handleColumns = (col) => columns = col 
  const isExtraSmallScreen = (screen) => (screen <= 600)
  const isSmallScreen = (screen) => (screen > 600 && screen <= 960)
  const isMediunScreen = (screen) => (screen > 960 && screen <= 1264)
  const isLargeScreen = (screen) => (screen > 1264 && screen <= 1904)
  const isExtraLargeScreen = (screen) => (screen > 1904)

  function handleScreen() {
    const size = window.innerWidth;
    if (isExtraSmallScreen(size)) handleColumns(xs);
    else if (isSmallScreen(size)) handleColumns(sm);
    else if (isMediunScreen(size)) handleColumns(md);
    else if (isLargeScreen(size)) handleColumns(lg); 
    else if (isExtraLargeScreen(size)) handleColumns(xl);
  }

  //LifeCycle
  onMount(() => window.addEventListener("resize", () => handleScreen()));
  afterUpdate(() => handleScreen());
</script>

<div style={` grid-column: span ${columns}; ${style} `} id={id}>
  <div
    style={`
        display: flex;
        flex-direction: column;
        min-height: ${height};
        align-items: ${justify};
        justify-content: ${align};
    `}
  >
    <slot><!-- optional fallback --></slot>
  </div>
</div>
