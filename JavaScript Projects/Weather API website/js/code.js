let apiUrl =
  "http://api.weatherapi.com/v1/current.json?key=c5fa44a43739451b96190228231109&q=Rishon Lezion&aqi=no";

// Using async/await
async function fetchData() {
  try {
    const response = await axios.get(apiUrl);

    const tempData = response.data.current.temp_c;

    const apiPlace = document.querySelector(".api-place");

    const temperatureElement = apiPlace.querySelector("h2");

    temperatureElement.innerText = `The current temperature is: ${tempData}°C`;

    const cityName = response.data.location.name;

    const cityElement = apiPlace.querySelector("h1");

    cityElement.innerText = `${cityName}`;

    const condition = response.data.current.condition.text;

    const conditionElement = apiPlace.querySelector("h3");

    conditionElement.innerText = `Weather condition: ${condition}`;

    const humidity = response.data.current.humidity;

    const humidityElement = apiPlace.querySelector("h4");

    humidityElement.innerText = `Humidity Percentage: ${humidity}%`;

    // Change the color of the temperature text based on a condition
    if (tempData >= 27) {
      temperatureElement.style.color = "red";
    } else {
      temperatureElement.style.color = "green";
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

// Initial fetch and display
fetchData();

// Add event listener to the search input field
const searchInput = document.querySelector("#searchinput");

searchInput.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent the default form submission behavior

    const location = searchInput.value.trim();

    if (location) {
      apiUrl = `http://api.weatherapi.com/v1/current.json?key=c5fa44a43739451b96190228231109&q=${location}&aqi=no`;
      await fetchData(); // Fetch and display data for the new location
    }
  }
});
