const hii = document.addEventListener('DOMContentLoaded', function() {
  let API_KEY = "4e28532f08bfe158c88c5ddf5c65dd05";
  let CORS_WRAPPER = "https://cors-anywhere.herokuapp.com/"
  let URL = CORS_WRAPPER + "https://api.darksky.net/forecast/4e28532f08bfe158c88c5ddf5c65dd05/40.7127,-74.0059?exclude=currently?exclude=minutely?exclude=daily";
  let ctx = document.getElementById("NYCWeatherChart").getContext("2d")

  // makeRequest(URL, function(json) {
	 //    let tempChart = new Chart(ctx, {
	 //  		type: 'line',
	 //  		data: data,
	 //  		options: options
	 //  	})}


  

	 fetch(URL)
		.then(function(resp){
			// console.log(resp)
			return resp.json()
		})
		.then(function(resp){
			// console.log(resp.hourly)
			let hoursArr = resp.hourly.data


			let hourMap = hoursArr.map(function(hourObject){
				let newDate = new Date(hourObject.time * 1000)
				return newDate.getHours()
			})

			let tempArr = resp.hourly.data

			let tempMap = tempArr.map(function(tempObject) {
				return tempObject.temperature	
			})
			
			dataArray = []

			let data = hourMap.forEach(function(hourMap, index) {
				dataArray.push({x: hourMap, y: tempMap[index]})
				return dataArray

			})

			  var tempChart = new Chart(ctx, {
			      type: 'line',
			      data: {
		        labels: hourMap,
        			datasets: [
          {
            data: tempMap,
            backgroundColor: 'rgba(102, 255, 204)'
          }
        ]

        
      }
    });




			})

			
			// console.log(hourMap)
			// const myData = resp
			// ctx.innerHTMl = myData
			// return ctx.innerHTML
		})
	  










