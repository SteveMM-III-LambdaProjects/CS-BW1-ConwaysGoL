<template>
  <div class="container">
    <span>
      <button @click="start">Start</button>
      <button @click="stop">Stop</button>
    </span>
  </div>
</template>

<script>
  import { eventBus } from '../helpers/EventBus';
  export default {
    data: function() {
      return {
        name: "Controls"
      }
    },
    components: {

    },
    computed: {

    },
    watch: {

    },
    methods: {
      start() {
        eventBus.$emit( 'startEvent' );
      },
      stop() {
        eventBus.$emit( 'stopEvent' );
      }
    }
  };
</script>

<style scoped>
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
