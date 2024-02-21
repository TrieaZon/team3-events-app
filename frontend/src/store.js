import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'
// import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer, userDetailsReducer, userUpdateProfileReducer, userRegisterReducer } from './reducers/userReducers'

const rootReducer = combineReducers({
  eventList: eventListReducer,
  eventDetails: eventDetailsReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userRegister: userRegisterReducer
})


const userInfoFromStorage = localStorage.getItem('userInfo') 
  ? JSON.parse(localStorage.getItem('userInfo')) 
  : null

const initialState = {
  userLogin: {userInfo: userInfoFromStorage}
}


const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState
})

export default store