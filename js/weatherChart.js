//API_KEY: 9c75c6c9fc735dff1e9057dc0e6e3c15

// 'https://api.darksky.net/forecast/9c75c6c9fc735dff1e9057dc0e6e3c15/40.7127,-74.0059?exclude=currently?exclude=minutely?exclude=daily'

let resultsHash = {}


function getFahrenheits(result){
  // Your code goes here
  const resultsList = document.querySelector('#dummy')

  let template = `<li>${result.temperature}</li><br>`

  resultsList.innerHTML += template

}

function getHours(result){
  const resultsList = document.querySelector('#dummy')

  let newResult = new Date(result.time*1000)
  let template = `<li>${newResult.getHours()}</li>`

  resultsList.innerHTML += template

}
// function generateDataSet(labels, json) {
function generateDataSet(json) {
  const template = json.hourly.data.map(function(result) {
      getHours(result)
      getFahrenheits(result)
      resultsHash[result.time] = result.temperature
    })

}

function makeRequest(endpoint, success) {
  // Your code goes here
  fetch(endpoint).then(res => res.json()).then(json => generateDataSet(json));

}
