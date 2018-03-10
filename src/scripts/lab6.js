import axios from 'axios';

var localisation = 0;
var posi = 0;
var forecast10Days = 0;

var urlPos = 'http://api.wunderground.com/api/48403928956201e4/geolookup/q/';
var urlForecast = 'http://api.wunderground.com/api/48403928956201e4/forecast10day/q/'
var keyID = '48403928956201e4';

function getlocalisation () {
  var geoSuccess = function(position) {
    localisation = position;
  };
  var geoError = function(error) {
    console.log('Une erreur est survenue!');
  };
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
}

function getData() {

  let state;

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

export {localisation, forecast10Days, getlocalisation, posi, getData};
