import axios from "axios";
import React, { useState } from "react";

function WeatherApi() {
  const [city, setCity] = useState();
  const [weatherData, setWeatherdata] = useState();

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const fetWeatherapi = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"860f808ed68a8a83e85b3b99c9b8b97d"}`
      );
      console.log(response);
      setWeatherdata(response);
    } catch (error) {
      document.write("Not able to find weather data", error);
    }
  };

  const handleClick = () => {
    fetWeatherapi();
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Weather Report</h1>
          <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Enter City Name"
          />
          <button className="btn btn-success" onClick={handleClick}>
            Get weather info
          </button>
          {weatherData && (
            <>
              <h6>City: {weatherData.data.name}</h6>
              <h6>Temperature: {weatherData.data.main.temp}</h6>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default WeatherApi;
