import axios from 'axios';

var localisation;
var posi;
var forecast10Days;
var state;
var pays;

var urlPos = 'http://api.wunderground.com/api/48403928956201e4/geolookup/q/';
var urlForecast = 'http://api.wunderground.com/api/48403928956201e4/forecast10day/q/'
var keyID = '48403928956201e4';

function getlocalisation () {

  var stringPosi;

  var geoSuccess = function(position) {
    localisation = position;
  };
  var geoError = function(error) {
    console.log('Une erreur est survenue!');
  };
  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);

  axios.get(urlPos + localisation.coords.latitude + "," + localisation.coords.longitude + ".json")
    .then(response => {
      posi = response.data.location.city;
      state = response.data.location.state;
      pays = response.data.location.country_name;
      console.log(posi);
    })
    .catch(error => {
      console.log(error);
      alert(error);
    });

  return stringPosi = pays + ", " + state + ", " + posi;
}

function getForecast() {
  axios.get(urlForecast + state + "/" + posi + ".json")
    .then(response => {
      forecast10Days = response.data.forecast.txt_forecast.forecastday;
    })
    .catch(error => {
      console.log(error);
      alert(error);
    });

  return forecast10Days;
}

function getData() {

}

export {localisation, forecast10Days, getlocalisation, posi, getData, getForecast, state, pays};
