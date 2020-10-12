<script>
    import MdMenu from 'svelte-icons/md/MdMenu.svelte'
    import MdFace from 'svelte-icons/md/MdFace.svelte'
    import MdHome from 'svelte-icons/md/MdHome.svelte'
    import MdWork from 'svelte-icons/md/MdWork.svelte'

    import { push } from 'svelte-spa-router'

    function openRoute(route) {
        push(route)
    }
</script>

<style>
    .floating-router-container {

        width: 64px;
        height: 64px;

        position: fixed;
        z-index: 9999;
        top: 2em;
        left: 2em;

        transition-property: width height;
        transition-duration: 1s;
    }
    .floating-router-container:hover {
        width: 128px;
        height: 128px;

        top: 0em;
        left: 0em;
    }

    .floating-router-container:hover > .floating-router-item-1 {
        width: 40px;
        height: 40px;

        transform:  translate(0px, calc(32px + 4px + 32px));
    }
    .floating-router-container:hover > .floating-router-item-1:active {
        width: 45px;
        height: 45px;
    }

    .floating-router-container:hover > .floating-router-item-2 {
        width: 40px;
        height: 40px;

        transform: translate(calc(32px + 4px + 32px), -32px);
    }
    .floating-router-container:hover > .floating-router-item-2:active {
        width: 45px;
        height: 45px;
    }

    .floating-router-container:hover > .floating-router-item-3 {
        width: 40px;
        height: 40px;

        transform:  translate(calc(32px + 4px + 32px), calc(32px + 2px));
    }
    .floating-router-container:hover > .floating-router-item-3:active {
        width: 45px;
        height: 45px;
    }

    .floating-button {

        width: 60px;
        height: 60px;

        background-color: white;
        color: #010101;
    }
    .floating-button:active {
        width: 64px;
        height: 64px;
    }

    /* Router items */
    .floating-router-item-1 {
        width: 0px;
        height: 0px;

        background-color: white;

        transition-property: all;
        transition-duration: .5s;
    }
    .floating-router-item-2 {
        width: 0px;
        height: 0px;

        background-color: white;

        transition-property: all;
        transition-duration: .5s;
    }
    .floating-router-item-3 {
        width: 0px;
        height: 0px;

        background-color: white;

        transition-property: all;
        transition-duration: .5s;
    }

    /* Another else styles */
    .circle-border {
        border-radius: 100px;
    }
    .absolute {
        position: absolute;
    }
    .pointer {
        cursor: pointer;
    }
    .z-index-2 {
        z-index: 2;
    }
    .z-index-1 {
        z-index: 1;
    }
    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn {
        box-shadow: 2px 1px 2px rgba(0, 0, 0, .2);
    }

    .icon-big {
        width: 32px;
        height: 32px;
    }
    .icon-small {
        width: 25px;
        height: 25px;
    }
</style>

<div class="floating-router-container circle-border center">
    <div class="floating-button circle-border pointer z-index-2 center absolute btn">
        <div class="icon-big">
            <MdMenu />
        </div>
    </div>

    <div
        class="floating-router-item-1 circle-border absolute pointer z-index-1 center btn"
        on:click={() => openRoute("/")}
    >
        <div class="icon-small">
            <MdHome/>
        </div>
    </div>
    <div
        class="floating-router-item-2 circle-border absolute pointer z-index-1 center btn"
        on:click={() => openRoute("/works")}
    >
        <div class="icon-small">
            <MdWork />
        </div>
    </div>
    <div
        class="floating-router-item-3 circle-border absolute pointer z-index-1 center btn"
        on:click={() => openRoute("/about")}
    >
        <div class="icon-small">
            <MdFace />
        </div>
    </div>
</div>