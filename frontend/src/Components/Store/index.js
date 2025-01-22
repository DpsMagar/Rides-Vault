import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import curentItemReducer from './CurrentItem'

export const store = configureStore({
  reducer: {
    user: userReducer,
    currentItem: curentItemReducer,
  },
})
