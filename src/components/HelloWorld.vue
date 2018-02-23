<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Tâche : <input> <button>Ajouter la tâche</button> </h2>
    <button @click="getTasks">Voir les tâches</button>
    <button>Modifier une tâche</button>
    <button>Supprimer une tâche</button>
    <ul>
      <li v-for="todo in todos">
        {{todo.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

var userID = 'fbbda809-4905-49e5-a331-30f8cb19f30a';
var urlget = 'https://glo3102lab4.herokuapp.com/fbbda809-4905-49e5-a331-30f8cb19f30a/tasks';



export default {
  name: 'Titre',
  data () {
    return {
      msg: 'Todo list',
      todos: []
    }
  },

  methods: {
    getTasks(){
      alert('BONJOUR TABARNAAAAAAAKKKKKKK!');
      fetch(urlget)
        .then((resp) => resp.json()) // Transform the data into json
        .then((data) =>  this.todos = data.tasks);
    }
      /*axios.get('https://glo3102lab4.herokuapp.com/fbbda809-4905-49e5-a331-30f8cb19f30a/tasks')
        .then(response => {
          this.todos = response.data
        })
        .catch(error => {
          console.log(error);
        })*/
  },
}

/*function getTasks() {
  axios.get('https://glo3102lab4.herokuapp.com/fbbda809-4905-49e5-a331-30f8cb19f30a/tasks')
    .then(response => {
      this.todos = response.data
    })
    .catch(error => {
      console.log(error);
    })
}*/

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
