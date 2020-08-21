<template>
  <section>
    <h2>{{ name }}</h2>
    <div class="modal-container">
      <p>
        In 1968 John Conway began doing experiments with different 
        two-dimensional cellular automaton rules with the goal of 
        defining an interesting and unpredictable cell automaton.
      </p>
      <p>
        After considerable experimentation, he chose his rules based 
        on the following criteria:
      </p>
      <ol>
        <li v-for="( item, index ) in criteria" :key="index">{{ item }}</li>
      </ol>
      <p>
        The rules are condensed as follows:
      </p>
      <ol>
        <li v-for="( rule, index ) in rules" :key="index">{{ rule }}</li>
      </ol>
      <p>
        Interestingly, given a sufficently sized grid and enough time, 
        constructs can be created to build  functionally complete logical 
        circuitry and memory that can be used to perform general purpose 
        computations, making the Game of Life Turing Complete.
      </p>
      <a :href="url" target="_blank">More info</a>
    </div>
  </section>
</template>

<script>
  export default {
    data: function() {
      return {
        name: "About",
        criteria: [
          "There should be no explosive growth.",
          "There should exist small initial patterns with chaotic, unpredictable outcomes.",
          "There should be potential for von Neumann universal constructors.",
          "The rules should be as simple as possible, whilst adhering to the above constraints."
        ],
        rules: [
          "Any live cell with two or three live neighbours survives.",
          "Any dead cell with three live neighbours becomes a live cell.",
          "All other live cells die in the next generation. Similarly, all other dead cells stay dead."
        ],
        url: "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
      }
    },
    components: {

    },
    computed: {

    },
    watch: {

    },
    methods: {

    }
  };
</script>

<style></style>
