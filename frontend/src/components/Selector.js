import React from "react"
import { Box, FormControl, Select, MenuItem, Grid, Icon } from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { SELECT_CURRENT_COIN, SELECT_CURRENT_CURRENCY } from '../redux/coinsSlice'
const Selector = () => {
  
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }
  const dispatch = useDispatch()
  const { currentCoin, coins, currentCurrency, currencies } = useSelector(state => state.coins)
 
  console.log(coins)
  console.log(currentCoin)
  console.log(currentCurrency)
  console.log(currencies)

  if (coins.length !== 0) 
  return (
    <Box sx={{ minWidth: 500 }}>
      <Grid container direction ="row" justifyContent="center" alignItems="center" spacing={2}>
        <Grid item>
          <Icon fontSize="large">
            <img src={currentCoin.image} height={35} width={35} />
          </Icon>
          
        </Grid>
       
        <Grid item>
         
          <FormControl style={{ minWidth: 400 }} size="small">
            <Select MenuProps={MenuProps} defaultValue={currentCoin.name}>
              {coins.map(coin => <MenuItem onClick={() => dispatch(SELECT_CURRENT_COIN(coin))} key = {coin.name} value={coin.name}>{coin.name}</MenuItem>)}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl defaultValue="" size="small">
            <Select MenuProps={MenuProps} style={{ minWidth: 100 }} defaultValue={currentCurrency} >
              {currencies.map(currency => <MenuItem key = {currency} onClick={() => dispatch(SELECT_CURRENT_CURRENCY(currency))} value={currency}>{currency}</MenuItem>)}
            
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
  return null
}

export default Selector
