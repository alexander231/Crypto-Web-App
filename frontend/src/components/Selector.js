import React from "react"
import { Box, FormControl, Select, MenuItem, Grid } from "@mui/material"
const Selector = () => {
  return (
    <Box sx={{ minWidth: 500 }}>
      <Grid container direction ="row" justifyContent="center" spacing={4}>
        <Grid item>
          <FormControl style={{ minWidth: 400 }}>
            <Select defaultValue={30}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl>
            <Select defaultValue={20} style={{ minWidth: 100 }}>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Selector
