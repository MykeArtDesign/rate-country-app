import { GET_RATE_EXCHANGE } from '../actions'

const initialState = {
  rateExchangeList: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_RATE_EXCHANGE:
      return {
        ...state,
        rateExchangeList: [action.payload, ...state.rateExchangeList]
      }
    default:
      return state
  }
}