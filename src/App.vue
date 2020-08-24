<template>
  <main>
    <h1>{{ name }}</h1>
    <About></About>
    <Grid></Grid>
  </main>
</template>

<script>
  import About from './components/About'
  import Grid  from './components/Grid'
  export default {
    data: function() {
      return {
        name: "Conway's Game of Life"
      }
    },
    components: {
      About,
      Grid
    },
    computed: {

    },
    watch: {

    },
    methods: {

    }
  };
</script>

<style>
  @import url(https://unpkg.com/normalize.css@8.0.1/normalize.css);
  /* ----- Global Styles ----- */
  html {
    /* normalize fonts */
    font-size: 62.5%;
  }
  body {
    font-size: 1.6rem;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }
</style>
