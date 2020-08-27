<template>
  <main>
    <h1>{{ name }}</h1>
    <div class="wrapper">
      <About class='sideA'></About>
      <Examples class='sideB'></Examples>
    </div>
    <Grid></Grid>
  </main>
</template>

<script>
  import About from './components/About';
  import Examples from './components/Examples';
  import Grid  from './components/Grid';
  export default {
    data: function() {
      return {
        name: "Conway's Game of Life"
      }
    },
    components: {
      About,
      Grid,
      Examples
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
  }
  .wrapper {
    padding: 1%;
    display: flex;
    justify-content: space-evenly;
  }
  .sideA, .sideB {
    width: 49%;
  }
  .sideA h2, .sideB h2 {
    text-decoration: underline;
  }
  .sideA h2:hover, .sideB h2:hover {
    cursor: pointer;
  }
  section h2, h1 {
    text-align: center;
  }
</style>
