import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCoins } from "./redux/coinsSlice"
import { Grid } from "@mui/material"
import Header from "./components/Header"
import Body from "./components/Body"

const App = () => {
  const dispatch = useDispatch()
  const { currentCurrency } = useSelector(state => state.coins)
  useEffect(() => {
    dispatch(getAllCoins(currentCurrency))
  }, [dispatch])
 
 
  //const [fiat, setFiat] = useState('usd')
  //const [noOfcoins, setNoOfCoins] = useState(10)
  
 

  return (
    
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Header />
      </Grid>

      <Grid item container direction="row">

      <Grid item xs={0} sm={2} />

      <Grid item xs={12} sm={8}>
          <Body />
      </Grid>
      
        <Grid item xs={0} sm={2} />
      </Grid>

      <Grid item>Footer</Grid>
    </Grid>
  )
}

export default App
