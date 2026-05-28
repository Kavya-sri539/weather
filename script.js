document
  .getElementById("location-form")
  .addEventListener("submit", getWeather);

async function getWeather(e) {

  e.preventDefault();

  const apiKey = "58aa82c533fdddfab21e3eaef2f589c0";

  const input = document.getElementById("location-input");

  const location = input.value.trim();

  const weatherData = document.getElementById("weather-data");

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {

    const response = await fetch(url);

    const data = await response.json();

    if (data.cod != 200) {

      weatherData.innerHTML = "Error: City not found";

      input.value = "";

      return;
    }

    weatherData.innerHTML = `
      <h2 id="name">${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Description: ${data.weather[0].description}</p>
    `;

    input.value = "";

  }

  catch(error){

    weatherData.innerHTML = "Error: City not found";

    input.value = "";

  }

}
