import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Icon, Button, Box, ButtonGroup, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import icon from '../icons/icon.png'

const Header = () => {
    
    return (
       
            <AppBar position ="static">
               
               <Toolbar>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item>
                        <Icon fontSize="large">
                            <img src = {icon} height = {30} width = {30} />
                        </Icon>
                        </Grid>
                        <Grid item>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group" >
                            <Button>Compare</Button>
                            <Button>Cryptocurrencies</Button>
                            <Button>News</Button>
                        </ButtonGroup>
                        </Grid>
                        <Grid>

                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                            <Button>Login</Button>
                            <Button>Sign Up</Button>
                        </ButtonGroup>
                        </Grid>
                   </Grid>
               </Toolbar>
               
           </AppBar>
       
        

    
    
    )
}

export default Header
