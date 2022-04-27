import React from 'react'
import { Box, Typography, Button, Paper, CardMedia} from '@mui/material'



export default function Hero() {
  return (
      
        <Box sx={{
            // m: '80px 0'
        }}>
            <Paper sx={{
                maxWidth: '100vw',
                paddingX: '20px',                    
                paddingY: {
                    xs: '50px',
                    sm: '50px',
                    md: '100px'
                },
                marginX: 'auto',
                backgroundColor: '#ffeacc',
                textAlign: 'center',
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    sm: 'column',
                    md: 'row'
                },
                justifyContent: 'space-evenly',
                alignItems: 'center'
                
            }}>
                <Box sx={{
                    maxWidth: {
                        xs: '600px',
                        sm: '500px',
                        md: '400px',
                        lg: '600px',
                        xl: '600px',
                    },
                }}>
                    <Typography variant='h1' sx={{
                        color: '#212121',
                        letterSpacing: '5px',
                        fontFamily: 'Bebas Neue',
                        borderBottom: '1px solid #212121',
                        mb:'30px',
                        typography: {
                            xs: 'h2',
                            sm: 'h2',
                            md: 'h2',
                            lg: 'h1'
                        }
                    }}>
                        REAL WOOD</Typography>
                    <Typography variant='h5' sx={{
                        color: '#212121',
                        pb:'20px',
                        borderBottom: '1px solid #212121',
                        mb:'30px',
                        fontFamily: 'Bebas Neue',
                        lineHeight: '35px',
                        typography: {
                            xs: 'h6',
                            sm: 'h6',
                            md: 'h5'
                        }
                    }}>
                        Wafer croissant ice cream apple pie sweet cookie liquorice. Gummies pie toffee fruitcake topping. Gummies pie toffee fruitcake topping. </Typography>
                    <Button variant='contained' color='warning' size='large' sx={{
                        marginBottom: {
                            xs: "20px",
                            sm: "20px"
                        }
                    }}>Learn More</Button>
                </Box>
                <Box>
                    <CardMedia 
                        component="img"
                        src="../images/card2.jpeg"
                        alt="herp-img"
                        sx={{
                            maxWidth: {
                                xs: '350px',
                                sm: '600px',
                                md: '400px',
                                lg: '600px',
                                xl: '600px',
                            },
                            height: '450px',
                            objectFit: 'cover'
                        }}      
                    />
                </Box>
            </Paper>
        </Box>
    

  
  )
}


