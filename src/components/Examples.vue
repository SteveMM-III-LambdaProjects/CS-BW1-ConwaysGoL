<template>
  <section>
    <h2 @click="toggleDisplay">Examples</h2>
    <div class="container" :class="{none: hide}">
      <p>( click an example to activate it on the grid )</p>
      <div class="row">
        <div class="example" @click="blinker">
          <label>Blinker</label>
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif" alt="blinker">
        </div>
        <div class="example" @click="beacon">
          <label>Beacon</label>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif" alt="beacon">
        </div>
        <div class="example" @click="pulsar">
          <label>Pulsar</label>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Game_of_life_pulsar.gif" alt="pulsar">
        </div>
      </div>
      <div class="gosper" @click="gosper">
        <label>Gosper Glider Gun</label>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Game_of_life_glider_gun.svg/2880px-Game_of_life_glider_gun.svg.png" alt="gosper glider gun">
      </div>
    </div>
  </section>
</template>

<script>
  import { eventBus } from '../helpers/EventBus';

  export default {
    data: function() {
      return {
        hide: true
      }
    },
    methods: {
      blinker() {
        eventBus.$emit( 'blinkerEvent' );
      },
      beacon() {
        eventBus.$emit( 'beaconEvent' );
      },
      pulsar() {
        eventBus.$emit( 'pulsarEvent' );
      },
      gosper() {
        eventBus.$emit( 'gosperEvent' );
      },
      toggleDisplay() {
        this.hide = !this.hide;
      }
    }
  };
</script>

<style scoped>
  .row {
    display:flex;
    justify-content: space-evenly;
  }
  .example {
    width: 100px;
  }
  .gosper {
    width: 400px;
    margin: 5px auto;
  }
  div img {
    width: 100%;
  }
  .example:hover, .gosper:hover {
    cursor: pointer;
  }
  .none {
    display: none;
  }
  p {
    text-align: center;
  }
</style>
