import React from 'react'
import CryptocurrencyList from './CryptocurrencyList'
import Selector from './Selector'
import { Button, Grid } from '@mui/material'
import { INCREASE_CURRENT_COINS_SIZE } from '../redux/coinsSlice'
import { useDispatch } from 'react-redux'
const Body = () => {
    const dispatch = useDispatch()
    return (
        <Grid container direction="column" spacing={4} justifyContent="center" alignItems="center">  
            
            <Grid item>
                <Selector/>
            </Grid>
            
            <Grid item>
                <CryptocurrencyList/> 
                
            </Grid>
            <Grid item>
                <Button onClick={() => dispatch(INCREASE_CURRENT_COINS_SIZE(10))}>
                    Show more coins
                </Button>
            </Grid>
        </Grid>
    )
}

export default Body
