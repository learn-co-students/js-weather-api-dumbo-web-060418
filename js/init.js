


document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "9c75c6c9fc735dff1e9057dc0e6e3c15";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + '9c75c6c9fc735dff1e9057dc0e6e3c15' + "/40.7127,-74.0059?exclude=currently?exclude=minutely?exclude=daily";
  // var ctx = document.getElementById("NYCWeatherChart").getContext("2d")


  makeRequest(URL);

})


const chartParent = document.querySelector("#NYCWeatherChart")

chartParent.addEventListener("mousedown", function() {

  let labelsHour = []
  let labelsTemp = []

  for (let hour in resultsHash) {
    labelsHour.push(hour)
  }

  for (let temp in resultsHash) {
    labelsTemp.push(resultsHash[temp])
  }

  var tempData = {
  labels: labelsHour,
  datasets: [{
    label: "Car Speed",
    data: labelsTemp,
  }]
};

var ctx = document.getElementById("NYCWeatherChart").getContext("2d")
var tempChart = new Chart(ctx).Line(tempData, { bezierCurve: true });

})
// var chartOptions = {
//   legend: {
//     display: true,
//     position: 'top',
//     labels: {
//       boxWidth: 80,
//       fontColor: 'black'
//     }
//   }
// };
