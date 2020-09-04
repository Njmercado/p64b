<script>
    import Router from 'svelte-spa-router'

    // Routes
    import Home from './Views/Home.svelte'
    import About from './Views/About.svelte'
    import Works from './Views/Works.svelte'
    import KribiWork from './Views/Works/Kribi.svelte'
    import WrongUrl from './Views/WrongUrl.svelte'

    const worksRoutes =  {
        '/works/kribi': KribiWork
    }

    const auxRoutes = {
        '/': Home,
        '/about': About,
        '/works': Works,
    }

    let routes = {...auxRoutes, ...worksRoutes, '*': WrongUrl}

    console.log(routes)
</script>

<body>
    <Router {routes}></Router>
</body>