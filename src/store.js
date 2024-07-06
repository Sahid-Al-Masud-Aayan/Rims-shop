import { configureStore } from '@reduxjs/toolkit'
import rimSlice from './Slices/rimSlice'

export default configureStore({
  reducer: {
    counter: rimSlice,
  },
})