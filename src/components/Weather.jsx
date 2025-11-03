const Weather = ({weather, message}) => {
  if (message) {
    return (
      <div className={'infoWeath'}>
        {message}
      </div>
    )
  } else {
    return (
      <div className={'infoWeath'}>
        <p>Location: {weather.country}, {weather.city}</p>
        <p>Temperature: {weather.temp}°C</p>
        <p>Pressure: {weather.pressure} mmHg</p>
        <p>Sunset: {weather.sunset?.toLocaleTimeString()}</p>
      </div>
    )
  }
}

export default Weather;