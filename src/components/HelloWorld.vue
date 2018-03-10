<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="faitLaJob">Donner votre localisation et voir les prévisions</button>
    <h2>{{pos}}</h2>
    <ul>
      <li v-for="forecast in forecasts">
        {{forecast}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import {localisation, forecast10Days, getlocalisation, posi} from '@/scripts/lab6';

var keyID = '48403928956201e4';
var url = 'https://glo3102lab4.herokuapp.com/fbbda809-4905-49e5-a331-30f8cb19f30a/tasks';



export default {
  name: 'Titre',
  data () {
    return {
      msg: 'Weather.JS',
      forecasts: [],
      pos: '',
    }
  },

  methods: {
    faitLaJob() {
      getlocalisation();
      this.pos = posi;
      this.forecasts = forecast10Days;
    },

    getTasks(){
      alert('BONJOUR!');
      fetch(urlget)
        .then((resp) => resp.json()) // Transform the data into json
        .then((data) =>  this.todos = data.tasks);
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
