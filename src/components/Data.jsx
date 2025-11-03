import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useState} from "react";
import {api_key, base_url} from "../utils/constants.jsx";

const Data = () => {
  const [weatherInfo, setWeatherInfo] = useState({});
  const [message, setMessage] = useState('Enter city name');

  const getWeather = city => {
    fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
      .then(response => response.json())
      .then(data => {
        setWeatherInfo({
          country: data.sys?.country,
          city: data.name,
          temp: data.main?.temp,
          pressure: data.main?.pressure,
          sunset: new Date(data.sys.sunset * 1000)
        })
        setMessage('')
      })
      .catch(error => {
        console.log(error)
        setMessage('Enter correct city name')
        setWeatherInfo({})
      })
  }


  return (
    <div>
      <Form getWeather={getWeather} />
      <Weather weather={weatherInfo} message={message} />
    </div>
  );
};

export default Data;