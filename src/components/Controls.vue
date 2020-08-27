<template>
  <div class="container">
    <span>
      <button @click="start">Start</button>
      <button @click="stop">Stop</button>
      <button @click="reset">Reset</button>
      <button @click="random">Random</button>
    </span>
  </div>
</template>

<script>
  import { eventBus } from '../helpers/EventBus';

  export default {
    methods: {
      start() {
        eventBus.$emit( 'startEvent' );
      },
      stop() {
        eventBus.$emit( 'stopEvent' );
      },
      reset() {
        eventBus.$emit( 'resetEvent' );
      },
      random() {
        eventBus.$emit( 'randomizeEvent' );
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
