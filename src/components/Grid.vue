<template>
  <div class="grid" ref="grid">
    <span>
      <button @click="run">Start</button>
      <button @click="stop">Stop</button>
    </span>
    <div class="row" v-for="y in rows" :key="y">
        <Cell
          v-for="cell in cells[y-1]"
          :is="cell.type"
          :col="cell.x"
          :row="cell.y"
          :living="cell.alive"
          :key="cell.key">
        </cell>
    </div>
  </div>
</template>

<script>
  import Cell from "./Cell"
  import * as helper from '../Helpers/cells'
  export default {
    data: function() {
      return {
        name: "Grid",
        rows: helper.rows,
        cells: helper.reset,
        reset: helper.reset,
        next: helper.test,
        current: 0,
        interval: null
      }
    },
    components: {
      Cell
    },
    computed: {

    },
    watch: {

    },
    methods: {
      swap() {
        if( this.current == 0 ) { this.cells = this.next; this.current = 1; }
        else { this.cells = this.reset; this.current = 0; }  
      },
      run() {
        const vm = this;
        this.interval = setInterval( function() {
          vm.swap();
        }, 800);
      },
      stop() {
        if ( this.interval ) {
          clearInterval( this.interval );
          this.interval = null;
        }
      }
    },
    created() {
      // this.run();
    },
    beforeDestroy() {
      this.stop();
    }
  };
</script>

<style>
  .grid {
    width: 600px;
    height: 400px;
    background-color: rgba(134, 134, 134, 0.185);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid rgba(24, 24, 24, 0.123);
    margin: 0 auto;
    box-shadow: 0px 0px 120px 50px rgba(83, 1, 1, 0.486);
  }
  .grid span {
    text-align: center;
  }
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
</style>
