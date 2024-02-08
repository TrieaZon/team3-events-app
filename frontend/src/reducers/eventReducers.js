import { EVENT_LIST_REQUEST, EVENT_LIST_SUCCESS, EVENT_LIST_FAIL, EVENT_DETAILS_REQUEST, EVENT_DETAILS_SUCESS, EVENT_DETAILS_FAIL } from "../constants/eventConstants";

export const eventListReducer = (state = {events: [ ]}, action) => {      //return array
  switch(action.type){
    case EVENT_LIST_REQUEST:
      return {loading: true, events: []}
    case EVENT_LIST_SUCCESS:
      return {loading: false, events: action.payload}
    case EVENT_LIST_FAIL: 
      return {loading: false, error: action.payload}
    default: 
      return state
  }
}

export const eventDetailsReducer = (state = {event: [ ]}, action) => {    //return specific by id, add likes object?
  switch(action.type){
    case EVENT_DETAILS_REQUEST:
      return {loading: true, ...state}
    case EVENT_DETAILS_SUCESS:
      return {loading: false, event: action.payload}
    case EVENT_DETAILS_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
} 