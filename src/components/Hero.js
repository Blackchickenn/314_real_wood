import React from 'react'
import { Box, Typography, Button, Paper} from '@mui/material'



export default function Hero() {
  return (
      
        <Box sx={{
            m: '80px 0'
        }}>
            <Paper sx={{
                maxWidth: '1000px',
                p: '35px 20px',
                marginX: 'auto',
                backgroundColor: '#ffeacc',
                textAlign: 'center'
            }}>
                <Typography variant='h3' gutterBottom sx={{
                    color: '#212121',
                    letterSpacing: '3px'
                }}>
                    REAL WOOD</Typography>
                <Typography variant='h6' gutterBottom sx={{
                    color: '#212121'
                }}>
                    Wafer croissant ice cream apple pie sweet cookie liquorice. Gummies pie toffee fruitcake topping. Gummies pie toffee fruitcake topping. </Typography>
                <Button variant='contained' color='warning' size='large'>Learn More</Button>
            </Paper>
        </Box>
    

  
  )
}


