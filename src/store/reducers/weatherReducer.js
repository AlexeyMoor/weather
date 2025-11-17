import {FETCH_WEATHER_FAIL, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS} from "../actions/weatherActions.js";

const initialState = {
  data: {},
  massage: '',
  loading: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {...state, loading: true, message: 'Loading...'};
    case FETCH_WEATHER_SUCCESS:
      return {...state, loading: false, data: action.payload, message: ''};
    case FETCH_WEATHER_FAIL:
      return {...state, loading: false, data: {}, message: action.payload};
    default:
      return state;
  }
}

export default weatherReducer;