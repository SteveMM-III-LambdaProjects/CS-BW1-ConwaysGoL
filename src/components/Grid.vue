<template>
  <div class="grid" ref="grid">
    <Controls></Controls>
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
  import Cell from './Cell';
  import Controls from './Controls';
  import { eventBus } from '../helpers/EventBus';
  import * as helpers from '../helpers/cells';
  export default {
    data: function() {
      return {
        name: "Grid",
        rows: helpers.rows,
        cells: helpers.reset,
        reset: helpers.reset,
        next: helpers.test,
        current: 0,
        interval: null
      }
    },
    components: {
      Cell,
      Controls
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
      start() {
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
      eventBus.$on( 'startEvent', () => {
        this.start();
      } );
      eventBus.$on( 'stopEvent', () => {
        this.stop();
      } );
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
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
</style>
