import React from 'react'
import Cryptocurrency from './Cryptocurrency'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
const CryptocurrencyList = () => {
    const { currentCoins } = useSelector(state => state.coins)
    return (
        
        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={4}>
            {currentCoins.map(coin => <Grid item key={coin.name} ><Cryptocurrency 
                                                            name={coin.name} 
                                                            index={coin.market_cap_rank} 
                                                            image={coin.image} 
                                                            currentPrice ={coin.current_price} 
                                                            marketCap={coin.market_cap} 
                                                            symbol={coin.symbol}
                                                        />
                                </Grid>)}
        </Grid>
    )
}

export default CryptocurrencyList
