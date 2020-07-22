<script>
    import { onMount } from 'svelte'

    const id = "textfield-" + Math.ceil(Math.random() * (1000 - 0));

    export let dense = false
    export let rounded = false
    export let icon = ''
    export let color = ''
    export let iconColor = 'rgba(0, 0, 0, .4)'
    export let placeholder = ''

    function setDense(el) {
        el.style.padding = '.4em'
    }

    function setRounded(el) {
        el.style.borderRadius = '100px'
    }

    function setIcon(el) {
        let input = el.firstChild;
        let icons = document.createElement('i')

        icons.style.color=iconColor
        icons.style.marginRight='8px'
        icons.style.marginLeft='8px'

        icons.classList.add('material-icons')
        icons.innerHTML = icon

        el.insertBefore(icons, input)
    }

    function setTextColor(el, color) {
        let input = el.firstChild;
        input.style.color=color
    }

    onMount(() => {
        let textField = document.getElementById(id)
        if(dense) setDense(textField)
        if(rounded) setRounded(textField)
        if(color.length > 0) setTextColor(textField, color)
        if(icon.length > 0) setIcon(textField)
    })
</script>

<style>
  .input {
    background-color: white;
    min-width: 16em;
    margin: 0 1em 1em 0;
    text-align: center;
    padding: 1em;
    display: flex;
    align-items: center;
  }

  .input > input {
      position: relative;
      margin: 0 auto;
      border-width: 0px;
      width: 100%;
      height: 100%;
  }

  .round {
      border-radius: 8px;
  }

  .shadow {
      box-shadow: 1px 1px 3px rgba(0, 0, 0, .4);
  }
</style>

<div class="input round shadow" id={id}>
    <input type="text" placeholder={placeholder}>
</div>
