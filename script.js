<!-- script.js -->
const url =
  'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
  'be10825c60e33211d189ff5de79db2c8';

$(document).ready(function () {
  weatherFn('Startup');
});

async function weatherFn(cName) {
  const temp =
    `${url}?q=${cName}&appid=${apiKey}&units=metric`;
    try {
      const res = await fetch(temp);
      const data = await res.json();
      if (res.ok) {
        weatherShowFn(data);
      } else {
        alert('City not found. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
}

//  $('#temperature').
//    html(`${data.main.temp}°C`);

function weatherShowFn(data) {
  $('#city-name').text(data.name);
  $('#date').text(moment().
    format('MMMM Do YYYY, h:mm:ss a'));
  $('#temperature').html(Math.round(data.main.temp * (9/5) + 32)+"°F");
  $('#description').
    text(data.weather[0].description);
  $('#wind-speed').
    html(`Wind Speed: ${data.wind.speed} m/s`);
  $('#weather-icon').
    attr('src',
    `/images/apple-icon.png`);
  $('#weather-info').fadeIn();
}
