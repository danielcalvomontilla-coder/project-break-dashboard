const weatherInfo = document.getElementById("weather-info");
const forecastInfo = document.getElementById("forecast-info");


fetch("https://api.weatherapi.com/v1/current.json?key=12bdcefe2b4f4a939c495042252912&q=Madrid&aqi=no")
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    const weatherTemplate = `
    <p>Location: ${data.location.name}</p>
    <p>Region: ${data.location.region}</p>
    <p>Condition: ${data.current.condition.text}</p>
    <p>Temperature: ${data.current.temp_c} °C</p>
    <p>Humidity: ${data.current.humidity} %</p>
    <p>Precipitation: ${data.current.precip_in} in</p>
    <p>Wind: ${data.current.wind_kph} kph</p>
    <p><img src="${data.current.condition.icon}" alt="Weather Icon"></p>
    `
    weatherInfo.innerHTML = weatherTemplate;   
  })


  .catch(error => {
    console.error("Error fetching weather data:", error);
  });

  fetch("https://api.weatherapi.com/v1/forecast.json?key=12bdcefe2b4f4a939c495042252912&q=Madrid&days=3&aqi=no&alerts=no")
  .then(response => response.json())
  .then(data => {
    const forecastTemplate = `
      <ul class="forecast-info">
        <li class="forecast-title">Forecast today hour by hour</li>
        <li class="forecast-scroll">
          ${data.forecast.forecastday[0].hour.map(hour => `
            <div class="forecast-item">
              <p><strong>Hour:</strong> ${hour.time}</p>
              <p><strong>Condition:</strong> ${hour.condition.text}</p>
              <p>${hour.temp_c} °C</p>
              <img src="${hour.condition.icon}" alt="Forecast Icon">
            </div>
          `).join("")}
        </li>
      </ul>
    `;

    forecastInfo.innerHTML = forecastTemplate;
  })

  .catch(error => {
    console.error("Error fetching weather data:", error);
  });