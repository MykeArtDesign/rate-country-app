import { combineReducers } from 'redux';
import ReducerCountries from './ReducerCountries'
import ReducerRateExchange from './ReducerRateExchange'

const rootReducer = combineReducers({
  countriesReducer: ReducerCountries,
  rateExchangeReducer: ReducerRateExchange
});

export default rootReducer;
