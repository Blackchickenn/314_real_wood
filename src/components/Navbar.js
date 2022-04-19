import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import ForestIcon from '@mui/icons-material/Forest';
import EmailIcon from '@mui/icons-material/Email';



export default function Navbar() {
  return (
    <AppBar position='static' sx={{
        height: '10vh'
    }}>
        <Toolbar>
            <IconButton color='inherit' size='large' edge='start' aria-label='logo'>
                <ForestIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>REAL WOOD</Typography>
            <Stack direction="row" spacing={1.5}>
                <Button color='inherit'>About Us</Button>
                <Button color='inherit'>Our Work</Button>
                <Button color='inherit'>Our Team</Button>
                <Button variant='contained' color='warning' startIcon={<EmailIcon />} sx={{ color: '#fff', backgroundColor: 'warning.light'}}>Contact Us</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}
