import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchWeather} from "../store/actions/weatherActions.js";
import {useCallback} from "react";

const Data = () => {
  const dispatch = useDispatch();
  const {data, message, loading} = useSelector(state => state.weather);

  const getWeather = useCallback((city) => {
    dispatch(fetchWeather(city));
  }, [dispatch]);

  return (
    <div>
      <Form getWeather={getWeather} loading={loading} />
      <Weather weather={data} message={message} loading={loading} />
    </div>
  );
};

export default Data;