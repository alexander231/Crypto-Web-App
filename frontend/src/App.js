import React from 'react'
import Grid from '@mui/material/Grid';
import Header from './components/Header';

const App = () => {
  return (
    <Grid container direction = "column">
      <Grid item>
        <Header>
          
        </Header>
      </Grid>
      <Grid item container>
        <Grid xs = {0} sm = {2}/>
        <Grid item xs = {12} sm = {8}>
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
