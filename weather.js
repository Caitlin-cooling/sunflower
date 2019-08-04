 // weatherText[0].innerHTML = "My new text!";
 // console.log(weatherText[0].innerHTML)

const pullWeatherText = function() {
  fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7e6bd9918c215b61f843bb28b4919e4b")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    setWeatherText(myJson)
  })
  .catch(function(error) {
    console.log("Error!!!!"+error);
  });
}

const setWeatherText = function(jsonWeatherText) {
   var weatherText = document.getElementsByClassName("weather");
   weatherText[0].innerHTML = jsonWeatherText.weather[0].main;
 };

window.onload = function() {
   pullWeatherText();
 };
