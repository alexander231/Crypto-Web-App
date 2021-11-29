import { configureStore } from '@reduxjs/toolkit'
import coinsReducer from './redux/coinsSlice'

export default configureStore({
    reducer: {
        coins: coinsReducer,
    },
})