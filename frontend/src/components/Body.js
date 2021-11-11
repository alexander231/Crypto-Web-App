import React from 'react'
import CryptocurrencyList from './CryptocurrencyList'
import Selector from './Selector'
import { Button, Divider, Grid } from '@mui/material'
const Body = ({ coins, addCoins}) => {
    return (
        <Grid container direction="column" spacing={4} justifyContent="center" alignItems="center">  
            
            <Grid item>
                <Selector/>
            </Grid>
            
            <Grid item>
                <CryptocurrencyList coins={coins}/>
            </Grid>
            <Grid item>
                <Button onClick={() => addCoins(20)}>
                    Show more coins
                </Button>
            </Grid>
        </Grid>
    )
}

export default Body
