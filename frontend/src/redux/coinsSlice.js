
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cryptocurrenciesService from '../services/cryptocurrencies'

export const getAllCoins = createAsyncThunk('coins/getAllCoins', async (currency, thunkAPI) => {
    const arrayOfCoins = await cryptocurrenciesService.getAll(currency)
    return arrayOfCoins
})


export const coinsSlice = createSlice({
    name: 'coins',
    initialState: { coins: [], noOfCoins: 0, currentCurrency: 'USD', currentCoins: [], currentCoin: '', currencies: ['USD', 'EUR', 'GBP', 'AUD', 'JPY', 'CAD', 'CHF', 'RON'] },
    reducers: {
        INCREASE_CURRENT_COINS_SIZE: (state, action) => {
            state.noOfCoins += action.payload
            state.currentCoins = state.coins.slice(0, state.noOfCoins)
        },
        SELECT_CURRENT_COIN: (state, action) => {
            state.currentCoin = action.payload
        },
        SELECT_CURRENT_CURRENCY: (state, action) => {
            state.currentCurrency = action.payload
        }
    },
    extraReducers: {
        // Add reducers for additional action types here, and handle loading state as needed
        [getAllCoins.fulfilled]: (state, action) => {
            state.coins = action.payload
            state.noOfCoins = 10
            state.currentCoins = action.payload.slice(0, state.noOfCoins)
            state.currentCurrency = action.meta.arg
            state.currentCoin = action.payload[0]
            
            
            
        }
    }

})

export const { INCREASE_CURRENT_COINS_SIZE, SELECT_CURRENT_COIN, SELECT_CURRENT_CURRENCY } = coinsSlice.actions
export default coinsSlice.reducer