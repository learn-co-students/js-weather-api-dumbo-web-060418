document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "221948f2de097d880248f8277c7ef0ae";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "https://api.darksky.net/forecast/"+ API_KEY + "/40.7127,-74.0059?exclude=currently?exclude=minutely?exclude=daily"

  var ctx = document.getElementById("NYCWeatherChart").getContext("2d")


  makeRequest(URL, function(data) {
    console.log(data)
    for(let i = 0; i < data['hourly']['data'].length; i++) {


    console.log(data['hourly']['data'][i]['temperature'])
    console.log(data['hourly']['data'][i]['time'])
   }
 })
  // fetch(URL)
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJSON) {
  //   console.log(myJSON);
  // });
  // makeRequest(URL, function(json) {
  //   var data = generateDataSet(getHours(json), getFahrenheits(json));
  //   var tempChart = new Chart(ctx).Line(data, { bezierCurve: true });
  // });
});
