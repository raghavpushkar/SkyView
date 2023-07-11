const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'af7d2b6395msh02b98efcf7bcb9dp1a43c2jsnbcdb762b8e21',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};



const getWeather = (city) => {
  cityName.innerHTML = city
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
    .then(response => response.json())
    .then((response) => {

      console.log(response)

      cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp
      temp2.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
      humidity2.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed.innerHTML = response.wind_speed
      wind_speed2.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset


      const sunriseTimestamp = response.sunrise;
      const sunsetTimestamp = response.sunset;
      const sunriseTime = new Date(sunriseTimestamp * 1000).toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata'
      });

      const sunsetTime = new Date(sunsetTimestamp * 1000).toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata'
      });

      sunrise.innerHTML = sunriseTime;
      sunset.innerHTML = sunsetTime;

    })
    .catch(error => console.error(error));
}

submit.addEventListener("click", (e) => {
  e.preventDefault()
  getWeather(city.value);
})

getWeather("Kolkata")
