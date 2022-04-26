import React from 'react'
import { Box, Typography, Button, Paper, CardMedia} from '@mui/material'



export default function Hero() {
  return (
      
        <Box sx={{
            // m: '80px 0'
        }}>
            <Paper sx={{
                maxWidth: '100vw',
                p: '100px 20px',
                marginX: 'auto',
                backgroundColor: '#ffeacc',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
                
            }}>
                <Box sx={{
                    maxWidth: '600px',
                }}>
                    <Typography variant='h1' sx={{
                        color: '#212121',
                        letterSpacing: '5px',
                        fontFamily: 'Bebas Neue',
                        borderBottom: '1px solid #212121',
                        mb:'30px'
                    }}>
                        REAL WOOD</Typography>
                    <Typography variant='h5' sx={{
                        color: '#212121',
                        pb:'20px',
                        borderBottom: '1px solid #212121',
                        mb:'30px',
                        fontFamily: 'Bebas Neue',
                        lineHeight: '35px'
                    }}>
                        Wafer croissant ice cream apple pie sweet cookie liquorice. Gummies pie toffee fruitcake topping. Gummies pie toffee fruitcake topping. </Typography>
                    <Button variant='contained' color='warning' size='large'>Learn More</Button>
                </Box>
                <Box>
                    <CardMedia 
                        component="img"
                        src="../images/card2.jpeg"
                        alt="herp-img"
                        sx={{
                            width: '100%',
                            height: '450px',
                            objectFit: 'cover'
                        }}      
                    />
                </Box>
            </Paper>
        </Box>
    

  
  )
}


