<script>
    import Router from 'svelte-spa-router'

    // Routes
    import Home from './Views/Home.svelte'
    import About from './Views/About.svelte'
    import WrongUrl from './Views/WrongUrl.svelte'

    const routes = {
        '/': Home,
        '/about': About,
        '*': WrongUrl
    }

</script>

<body>
    <Router {routes}></Router>
</body>