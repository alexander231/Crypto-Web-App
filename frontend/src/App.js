import React from "react"
import { useState, useEffect } from "react"
import { Grid } from "@mui/material"
import Header from "./components/Header"
import Body from "./components/Body"
import cryptocurrenciesService from './services/cryptocurrencies'
const App = () => {
  const [coins, setCoins] = useState([])
  const [fiat, setFiat] = useState('usd')
  const [noOfcoins, setNoOfCoins] = useState(10)
  useEffect(() => {
    cryptocurrenciesService.getAll(fiat).then((response) => {
      setCoins(response.slice(0, noOfcoins))
    })
  }, [fiat, noOfcoins])
  console.log(noOfcoins)
  console.log(coins)


  return (
    
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Header />
      </Grid>

      <Grid item container direction="row">

      <Grid item xs={0} sm={2} />

      <Grid item xs={12} sm={8}>
       
          <Body coins={coins} addCoins = {setNoOfCoins} />
      </Grid>
      
        <Grid item xs={0} sm={2} />
      </Grid>

      <Grid item>Footer</Grid>
    </Grid>
  )
}

export default App
