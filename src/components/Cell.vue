<template>
  <div class="cell" @click.stop="alive = !alive" :class="{alive: alive}"></div>
</template>

<script>
  export default {
    data: function() {
      return {
        name: "Cell",
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
      
    }
  };
</script>

<style>
  .cell {
    width: 10px;
    height: 10px;
    background-color: rgba(44, 0, 0, 0.288);
  }
  .alive {
    background-color: rgb(0, 255, 0);
  }
</style>
