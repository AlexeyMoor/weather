import {api_key, base_url} from "../../utils/constants.jsx";

export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAIL = 'FETCH_WEATHER_FAIL';

export const fetchWeather = city => async dispatch => {
  if (!city) {
    dispatch({type: FETCH_WEATHER_FAIL, payload: 'Please enter city name'});
    return;
  }

  dispatch({type: FETCH_WEATHER_REQUEST});

  try {
    const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.message || 'Failed to fetch weather data');
    }

    dispatch({
      type: FETCH_WEATHER_SUCCESS,
      payload: {
        country: data.sys?.country ?? '',
        city: data.name ?? '',
        temp: data.main?.temp ?? '',
        pressure: data.main?.pressure ?? null,
        sunset: data.sys?.sunset ? new Date(data.sys.sunset * 1000) : null
      }
    });
  } catch (error) {
    dispatch({type: FETCH_WEATHER_FAIL, payload: error.message});

  }
}
