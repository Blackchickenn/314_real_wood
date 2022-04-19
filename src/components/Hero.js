import React from 'react'
import { Box } from '@mui/material'
import Image from '../images/bg1.jpg'


export default function Hero() {
    const styles = {
        paperContainer: {
            backgroundImage: `url(${Image})`,
            height: '100vh',
            width: '100vw',
        }
    }

  return (
    <Box style={
        styles.paperContainer
    }>
        Background
    </Box>
  )
}


