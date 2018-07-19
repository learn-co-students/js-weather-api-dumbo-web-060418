function getFahrenheits(result){
  // Your code goes here
    // console.log(result['hourly']['data'][0]['temperature'])
    console.log(result)
}

function getHours(result){
  // Your code goes here

  // console.log(result['hourly']['data'][0]['time'])
  console.log(result)

}

function generateDataSet(labels, data) {
  // Your code goes here
}

const parseJSON = function(response) { return response.json()}

function makeRequest(endpoint, success) {
  // Your code goes here
  fetch(endpoint)
  .then(parseJSON)
  .then(success)
}
