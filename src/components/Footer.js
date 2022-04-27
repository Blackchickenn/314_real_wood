import React from 'react'
import { Box, Stack, Divider, Link } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <Box display='flex' flexDirection='column' justifyContent='space-evenly' paddingY={4} sx={{
        backgroundColor: '#282a2d',
        fontSize: '0.9rem',
        height: '200px'
    }}>
       <Stack justifyContent='center' direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem sx={{
           backgroundColor: '#9e9e9e'
       }}/>} >
          <Link underline='hover' sx={{
              color: '#9e9e9e',
              cursor: 'pointer'
          }}>Home</Link>
          <Link underline='hover' sx={{
              color: '#9e9e9e',
              cursor: 'pointer'
          }}>Our Work</Link>
          <Link underline='hover' sx={{
              color: '#9e9e9e',
              cursor: 'pointer'
          }}>Our Team</Link>
          <Link underline='hover' sx={{
              color: '#9e9e9e',
              cursor: 'pointer'
          }}>Contact Us</Link>
       </Stack>
       <Stack direction='row' spacing={2} justifyContent= 'center'>
          <Link >
            <FacebookIcon sx={{
                fontSize: '42px',
                color:'#9e9e9e',
                cursor: 'pointer'
            }}/>
          </Link>
          <InstagramIcon sx={{
              fontSize: '42px',
              color:'#9e9e9e',
              cursor: 'pointer'
          }}/>
          <EmailIcon sx={{
              fontSize: '42px',
              color:'#9e9e9e',
              cursor: 'pointer'
          }}/>
       </Stack>
    </Box>
  )
}
