
document.addEventListener('DOMContentLoaded', function() {
  var API_KEY = "9c75c6c9fc735dff1e9057dc0e6e3c15";
  var CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  var URL = CORS_WRAPPER + "https://api.darksky.net/forecast/" + '9c75c6c9fc735dff1e9057dc0e6e3c15' + "/40.7127,-74.0059?exclude=currently?exclude=minutely?exclude=daily";
  // var ctx = document.getElementById("NYCWeatherChart").getContext("2d")
  makeRequest(URL);
})

const chartParent = document.querySelector("#NYCWeatherChart")
chartParent.addEventListener("mousedown", function() {

  // let labelsHour = []
  // let labelsTemp = []
  //
  // for (let hour in resultsHash) {
  //   labelsHour.push(hour)
  // }
  //
  // for (let temp in resultsHash) {
  //   labelsTemp.push(resultsHash[temp])
  // }

  var tempData = {
    label: "Car Speed",
    labels: Object.keys(resultsHash),
    // datasets: [{
    //   fillColor: "rgba(151,187,205,0.2)",
    // 	strokeColor: "rgba(151,187,205,1)",
    // 	pointColor: "rgba(151,187,205,1)",
    //   data: Object.values(resultsHash),
    // }]

    datasets: [
    		// {
    		// 	label: "My First dataset",
    		// 	fillColor: "rgba(220,220,220,0.2)",
    		// 	strokeColor: "rgba(220,220,220,1)",
    		// 	pointColor: "rgba(220,220,220,1)",
    		// 	pointStrokeColor: "#fff",
    		// 	pointHighlightFill: "#fff",
    		// 	pointHighlightStroke: "rgba(220,220,220,1)",
    		// 	data: Object.keys(resultsHash)
    		// },
    		{
    			label: "My Second dataset",
    			fillColor: "rgba(151,187,205,0.2)",
    			strokeColor: "rgba(151,187,205,1)",
    			pointColor: "rgba(151,187,205,1)",
    			pointStrokeColor: "#fff",
    			pointHighlightFill: "#fff",
    			pointHighlightStroke: "rgba(151,187,205,1)",
    			data: Object.values(resultsHash)
    		}
    	]
  };

var ctx = document.getElementById("NYCWeatherChart").getContext("2d")
var tempChart = new Chart(ctx).Line(tempData, { bezierCurve: true, boxwidth: 180, datasetFill : true,});

})
