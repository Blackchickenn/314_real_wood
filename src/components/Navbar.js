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
                padding: '20px',
                backgroundColor: '#282a2d'
            }}>
                <Box sx={{
                    display:'flex',
                    alignItems: 'center'
                }}>
                    <IconButton color='inherit' size='large' edge='start' aria-label='logo'>
                        <ForestIcon />
                    </IconButton>
                    <Typography variant='h5'>REAL WOOD</Typography>
                </Box>
                <Box sx={{
                    display:'flex',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        display:{xs:'none', sm:'none', md:'block'},
                        paddingRight:{
                            md: '10px',
                            lg: '30px'
                        }
                    }}>
                        <Button color='inherit' sx={{
                            marginRight: {
                                md: '10px',
                                lg: '30px',
                                xl: '50px'
                            },
                            fontSize: '1.1rem'
                        }}>Home</Button>
                        <Button color='inherit' sx={{
                            marginRight: {
                                md: '10px',
                                lg: '30px',
                                xl: '50px'
                            },
                            fontSize: '1.1rem',
                            wordSpacing: '3px'
                        }}>Our Work</Button>
                        <Button color='inherit' sx={{
                            marginRight: {
                                md: '10px',
                                lg: '30px',
                                xl: '50px'
                            },
                            fontSize: '1.1rem',
                            wordSpacing: '3px'
                        }}>Our Team</Button>
                        <Button variant='contained' color='warning' startIcon={<EmailIcon />} sx={{
                            fontSize: '1.1rem'
                        }}>Contact Us</Button>
                    </Box>
                    <MenuIcon sx={{
                        display:{xs:'block', sm:'block', md:'none'}
                    }}/>
                </Box>
            </Toolbar>
        </AppBar>
      </div>
  )
}



// backgroundcolor: #282a2d