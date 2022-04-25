import React from 'react'
import { Box, Typography, Button } from '@mui/material'



export default function Hero() {


  return (
        <Box className='background-image' sx={{
            
        }} marginX='auto'>
            <Box >
                <Box sx={{
                    display:'flex',
                    flexDirection:'column',
                    marginX: 'auto',
                    marginTop:'250px',
                    backgroundColor:'#0b7cd7',
                    width:'500px',
                    paddingX: '150px',
                    paddingY: '20px',
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px;',
                   
                }}>
                    <Typography variant='h2' color='warning.light' component='div' sx={{
                        textAlign:'center', 
                        fontWeight:'bold',
                        letterSpacing:'5px',
                        }}>REAL WOOD</Typography>
                    <Typography color='#fff' variant='h5' component='div' textAlign='center' >Wafer croissant ice cream apple pie sweet cookie liquorice. Gummies pie toffee fruitcake topping. </Typography>
                    <Button variant='contained' color='warning' size='large' sx={{
                        width:'fit-content',
                        marginX:'auto',
                        mt:'20px'
                    }} >Learn More</Button>
                </Box>
            </Box>
        </Box>

  
  )
}


