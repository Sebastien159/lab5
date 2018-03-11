<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ msg2 }}</h1>
    <h1>{{ msg3 }}</h1>

    <button v-on:click="faitLaJob">Donner votre localisation</button>
    <button v-on:click="faitLaJob2">Voir les prévisions</button>
    <h2>{{pos}}</h2>
    <ul>
      <li v-for="forecast in forecasts" v-if="((forecast.period % 2) == 0) && forecast.period <= 12">
        <div>{{forecast.title}}</div>
        <div><img v-bind:src="forecast.icon_url"></div>
        <div class="espaceBottom">{{forecast.fcttext_metric}}</div>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios';
import {getlocalisation, getForecast} from '@/scripts/lab6';

var keyID = '48403928956201e4';
var url = 'https://glo3102lab4.herokuapp.com/fbbda809-4905-49e5-a331-30f8cb19f30a/tasks';

export default {
  name: 'Titre',
  data () {
    return {
      msg: 'Weather.JS',
      msg2: 'Étape 1 : clicker sur boutton "Donner votre localisation" 3 fois. (I know...)',
      msg3: 'Étape 2 : clicker sur boutton "Voir les prévisions" 2 fois. (I know...)',
      forecasts: [],
      pos: '',
    }
  },

  methods: {
    faitLaJob() {
      this.pos = getlocalisation();
    },

    faitLaJob2() {
      this.forecasts = getForecast();
    },
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  div.espaceBottom {
    padding-bottom: 5%;
  }

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
