const Weather = ({ weather, message, loading }) => {
  if (loading) {
    return <div className={'infoWeath'}>Loading...</div>;
  }

  if (message) {
    return <div className={'infoWeath'}>{message}</div>;
  }

  return (
    <div className={'infoWeath'}>
      <p>Location: {weather.country}, {weather.city}</p>
      <p>Temperature: {weather.temp}°C</p>
      <p>Pressure: {weather.pressure} mmHg</p>
      <p>Sunset: {weather.sunset?.toLocaleTimeString() ?? '-'}</p>
    </div>
  )
}


export default Weather;