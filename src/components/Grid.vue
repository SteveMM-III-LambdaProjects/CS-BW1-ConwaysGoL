<template>
  <div>
    <Controls></Controls>
    <div class="grid" ref="grid" :style="gridStyle">
      <div class="row" v-for="y in rows" :key="y">
          <Cell
            v-for="cell in cells[y-1]"
            :is="cell.type"
            :col="cell.x"
            :row="cell.y"
            :living="cell.alive"
            :key="cell.key"
            :style="cellStyle">
          </cell>
      </div>
    </div>
    <p style="text-align: center">Generation: {{ generation }}</p>
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
        width: helpers.grid_width,
        height: helpers.grid_height,
        cell_dims: helpers.cell_size,
        rows: helpers.rows,
        generation: 0,
        cells: helpers.reset(),
        next: null,
        interval: null
      }
    },
    components: {
      Cell,
      Controls
    },
    computed: {
      gridStyle() {
        return {
          width: this.width+'px',
          height: this.height+'px'
        }
      },
      cellStyle() {
        return {
          width: this.cell_dims+'px',
          height: this.cell_dims+'px',
          border: '0.5px solid black'
        }
      }
    },
    watch: {

    },
    methods: {
      swap() {
        this.cells = this.next
        this.next = helpers.next( this.cells );
        this.generation++;
      },
      start() {
        this.next = helpers.next( this.cells );
        const vm = this;
        this.interval = setInterval( function() {
          vm.swap();
        }, 50);
        this.generation++;
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
      eventBus.$on( 'resetEvent', () => {
        this.stop();
        this.cells = helpers.reset();
        this.generation = 0;
      } );
      eventBus.$on( 'randomizeEvent', () => {
        this.stop();
        this.cells = helpers.random();
        this.generation = 0;
      } );
      eventBus.$on( 'cellEvent', ( x, y ) => {
        this.cells = helpers.updateCells( x, y, this.cells );
      } );
    },
    beforeDestroy() {
      this.stop();
    }
  };
</script>

<style>
  .grid {
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
