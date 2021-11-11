import React from "react"
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Icon,
  Box,
  CardActionArea,
  Divider
} from "@mui/material"
const Cryptocurrency = ({ name, index, image, currentPrice, marketCap, symbol }) => {

  return (
    

      
      <Card sx ={{minWidth: 600}} >
        <Grid container direction="row" justifyContent="space-between" >
          <Grid item>
            <Box>
              <CardActionArea>
                <CardContent>
                  {index}
                  {name}
                  
                  
                  {symbol}
                  <Icon fontSize="large">
                    <img src={image} height={30} width={30} />
                  </Icon>
                  {marketCap}
                </CardContent>
            
            
              </CardActionArea> 
              
            </Box>
          </Grid>
          <Grid item>
            <Divider orientation="vertical" variant="middle"/>
          </Grid>
          <Grid item>

            <Box>
                  {name}
                  
                  {symbol}
                  <Icon fontSize="large">
                    <img src={image} height={30} width={30} />
                  </Icon>
                  {currentPrice}
            </Box>
          </Grid>
        </Grid>
      </Card>
    
  )
}

export default Cryptocurrency
