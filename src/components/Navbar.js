import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from '@mui/material'
import ForestIcon from '@mui/icons-material/Forest';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {
  return (
      <div >
        <AppBar position='sticky' >
            <Toolbar sx={{
                justifyContent: 'space-between',
                padding: '20px 0'
            }}>
                <Box sx={{
                    display:'flex',
                    alignItems: 'center'
                }}>
                    <IconButton color='inherit' size='large' edge='start' aria-label='logo'>
                        <ForestIcon />
                    </IconButton>
                    <Typography variant='h6'>REAL WOOD</Typography>
                </Box>
                <Box sx={{
                    display:'flex',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        display:{xs:'none', sm:'block'}
                    }}>
                        <Button color='inherit'>About Us</Button>
                        <Button color='inherit'>Our Work</Button>
                        <Button color='inherit'>Our Team</Button>
                        <Button variant='contained' color='warning' startIcon={<EmailIcon />}>Contact Us</Button>
                    </Box>
                    <MenuIcon sx={{
                        display:{xs:'block', sm:'none'}
                    }}/>
                </Box>
            </Toolbar>
        </AppBar>
      </div>
  )
}
