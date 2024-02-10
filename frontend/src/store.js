import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'
// import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer } from './reducers/userReducers'

const rootReducer = combineReducers({
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  userLogin: userLoginReducer,
//   cart: cartReducer,
//   userLogin: userLoginReducer
})

// const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
  userLogin: {userInfo}
}
//   cart: {cartItems: cartItemsFromStorage},


const store = configureStore({
  reducer: rootReducer,
  preoloadedState: initialState
})

export default store