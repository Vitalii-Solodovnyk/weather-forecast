//3aa28d44ef596462d2d443475f79f0a1
const NewCity = document.getElementById("City");
const NewEnter = document.getElementById("Enter");
const NewWeather = document.getElementById("Weather");
NewEnter.addEventListener("input", (event) => {
  console.log(event.target.value);
});
NewCity.addEventListener("click", () => {
  const city = NewEnter.value;
  const key = "3aa28d44ef596462d2d443475f79f0a1";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("This isn't a city, please try again");
      }
      return response.json();
    })
    .then((data) => {
      NewWeather.textContent = `${data.name}
       ${data.main.temp}°C`;
    })
    .catch((error) => console.log(error));
  NewWeather.textContent = "This isn't a city, please try again";
});

/*NewCity.addEventListener("click", (event) => {
  fetch(`https://home.openweathermap.org/api_keys`)
    .then((Response = console.log(Response)))
    .catch((error = console.error(error)));
});
*/
