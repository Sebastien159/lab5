import axios from 'axios';

var localisation = 0;
var something;
var posi;
var forecast10Days;

var urlPos = 'http://api.wunderground.com/api/48403928956201e4/geolookup/q/';
var urlForecast = 'http://api.wunderground.com/api/48403928956201e4/forecast10day/q/'
var keyID = '48403928956201e4';

function getlocalisation () {
  var state;

  var geoSuccess = function(position) {
    localisation = position;
  };
  var geoError = function(error) {
    console.log('Une erreur est survenue!');
  };
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

  alert(urlPos + localisation.coords.latitude + "," + localisation.coords.longitude + ".json");

  axios.get(urlPos + localisation.coords.latitude + "," + localisation.coords.longitude + ".json")
    .then(response => {
      posi = response.data.location.city;
      state = response.data.location.state;
      console.log(posi);
    })
    .catch(error => {
      console.log(error);
      alert(error);
    });

  axios.get(urlForecast + state + "/" + posi + ".json")
    .then(response => {
      forecast10Days = response.data.forecast.txt_forecast.forecastday;
    })
    .catch(error => {
      console.log(error);
      alert(error);
    });

  alert(posi);
}

function getForecasts (lat, long) {
  fetch(urlPos + lat + "," + long)
    .then((resp) => resp.json())
    .then((data) => posi = data.location);

  return something;
  /*axios.get('https://glo3102lab4.herokuapp.com/fbbda809-4905-49e5-a331-30f8cb19f30a/tasks')
    .then(response => {
      pos = response.data.location.city
    })
    .catch(error => {
      console.log(error);
      alert(error);
    })*/
}


export {localisation, forecast10Days, getlocalisation, posi};
