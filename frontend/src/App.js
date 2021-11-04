import React from 'react'
import Grid from '@mui/material/Grid';
import Header from './components/Header';
import Selector from './components/Selector';
import { AppBar, Toolbar, Typography, Card, CardContent } from '@mui/material'
const coins = [
  'Bitcoin',
  'Ethereum',
  'Polkadot',
  'Cardano',
  'Dogecoin'
]
const App = () => {
  return (
    <Grid container direction = "column">
      <Grid item>
        <Header>
          
        </Header>
      </Grid>
      <Grid item container direction="row">
        <Grid xs = {0} sm = {2}/>
        <Grid item xs = {12} sm = {8}>
          <Typography>
            ASDA
          </Typography>
          <Selector>
          </Selector>
        <Card>
          <CardContent>
        <Typography>
            ASDA

          </Typography>
          </CardContent>

          </Card>
       
         
          <Card>
          <CardContent>

          <Typography>
            ASDA
          </Typography>
          </CardContent>

            </Card>
        This is where the body is situated
        This is where the body is situated
        This is where the body is situated

        This is where the body is situated
        This is where the body is situated
        This is where the body is situated

        This is where the body is situated
        This is where the body is situated
        This is where the body is situated

        This is where the body is situated
        This is where the body is situated
        This is where the body is situated

        This is where the body is situated
        This is where the body is situated
        This is where the body is situated

        This is where the body is situated
        This is where the body is situated
        This is where the body is situated
        </Grid>
      <Grid xs = {0} sm = {2}/>
          
      </Grid>
      <Grid item>
        Footer
      </Grid>
    </Grid>
  )
}

export default App
