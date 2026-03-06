// Replace with your own OpenWeatherMap API key
const apiKey = "YOUR_API_KEY";

const cityInput = document.getElementById("city");
const getWeatherBtn = document.getElementById("getWeather");
const weatherResult = document.getElementById("weatherResult");

// Arrow function + async/await + template literals
const getWeather = async (city) => {
  weatherResult.textContent = "Loading...";
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();

    if (data.cod === "404") {
      weatherResult.textContent = "City not found";
      return;
    }

    weatherResult.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].main}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
  } catch (err) {
    weatherResult.textContent = "Error fetching weather";
    console.error(err);
  }
};

// Event listener using modern syntax
getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  getWeather(city);
});
