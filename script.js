// document.getElementById('location-form').addEventListener('submit', getWeather);

// let loc=document.getElementById("location-input");
// async function getWeather(e) {
//   e.preventDefault();
//   const apiKey = '58aa82c533fdddfab21e3eaef2f589c0';
//   const location=loc.value;
//   const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
//   try{
//     const response= await fetch(url);
//     if(!response.ok){
//       throw new Error('Failed to fetch weather data');
//     }
//     const data=await response.json();
//     const temp=data.main.temp;
//     const desc=data.weather[0].description;
//     const weatherData=document.getElementById("weather-data");
//     weatherData.innerHTML=`<p>Temperature: ${temp}°C</p> <br>
//     <br> <p>  Description: ${desc}</p>`;
//   }
//   catch(error){
//     document.getElementById("weather-data")
//    .innerHTML = "City not  found";

//   }

//   //Write you code logic here

//   // Error should be very specific
//   // Error: Failed to fetch weather data,   should always fetch this error in case of any failure otherwise you test cases will get failed.
// }
// document.getElementById('location-form')
// .addEventListener('submit', getWeather);

// let loc = document.getElementById("location-input");

// async function getWeather(e) {
//   e.preventDefault();

//   const apiKey = '58aa82c533fdddfab21e3eaef2f589c0';
//   const location = loc.value;

//   const url =
//   `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

//   try {

//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("City not found");
//     }

//     const data = await response.json();

//     const temp = data.main.temp;
//     const desc = data.weather[0].description;
//     const name = data.name;

//     document.getElementById("weather-data").innerHTML = `
//       <h2 id="name">${name}</h2>
//       <p>Temperature: ${temp}°C</p>
//       <p>Description: ${desc}</p>
//     `;

//     // clear input
//     loc.value = "";

//   }

//   catch (error) {

//     document.getElementById("weather-data").innerHTML =
//     "Error: City not found";

//   }
// }
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