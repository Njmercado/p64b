<script>

    import { onMount } from 'svelte'

    const id = "avatar-" + Math.ceil(Math.random() * (1000 - 0));

    export let className = ''
    export let width = '8em'
    export let height = '8em'
    export let color = 'white'
    export let src = ''

    onMount(() => {
        let avatar = document.getElementById(id)
        let avatarImage = avatar.childNodes[src.length > 0 ? 1 : 0]

        avatar.style.backgroundColor = color
        avatar.style.width = width
        avatar.style.height = height

        avatarImage.style.width = `70%`
        avatarImage.style.height = `70%`
        avatarImage.style.objectFit = "cover"
    })
</script>

<style>
  .avatar{
    background-color: white;
    border-radius: 100%;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, .2);
  }

  .avatar > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
</style>

<div
    class={`
        avatar
        ${className}
    `}
    id={id}
>
    <slot><!-- optional fallback --></slot>
    <img src={src} alt="work icon">
</div>