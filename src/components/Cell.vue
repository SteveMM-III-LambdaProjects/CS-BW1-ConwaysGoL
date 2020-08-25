<template>
  <div class="cell" @click="toggleLiving" :class="{alive: alive}"></div>
</template>

<script>
  import { eventBus } from '../helpers/EventBus';
  export default {
    data: function() {
      return {
        alive: false,
        x: null,
        y: null
      }
    },
    props: {
      col: { type: Number },
      row: { type: Number },
      living: { type: Boolean }
    },
    components: {

    },
    computed: {

    },
    watch: {
      col: {
        immediate: true,
        handler() {
          this.x = this.col;
        }
      },
      row: {
        immediate: true,
        handler() {
          this.y = this.row;
        }
      },
      living: {
        immediate: true,
        handler() {
          this.alive = this.living;
        }
      }
    },
    methods: {
      toggleLiving() {
        eventBus.$emit( 'cellEvent', this.x, this.y );
      }
    }
  };
</script>

<style>
  .cell {
    background-color: rgba(44, 0, 0, 0.288);
  }
  .alive {
    background-color: rgb(0, 255, 0);
  }
</style>
