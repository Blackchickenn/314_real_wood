import React from 'react'
import { Box, Avatar, Stack, Typography, Grid} from '@mui/material';



export default function Ourteam() {
  return (
    <Box textAlign='center' sx={{
        backgroundColor: '#ffeacc'
    }}>
        <Typography variant='h4' sx={{
            fontFamily: 'Bebas Neue',
            letterSpacing: '3px',
            margin: 'auto',
            mt:'80px',
            borderLeft:'2px solid black',
            borderRight:'2px solid black',
            pl:'20px',
            pr:'20px',
            display: 'inline-block'
        }}>
            OUR Team</Typography>
        <Grid container columnSpacing={5} rowSpacing={5}  sx={{
            padding:'50px 80px 120px 80px',
            justifyContent: 'space-evenly',
        }}>
            {teamData.map(item => (
            <Grid item xs={12} sm={12} md={6} lg={4} sx={{
                // width: '450px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center",
                flexDirection: {
                    xs: 'column',
                    sm: 'row'
                }
            }}>
                <Avatar src={item.img} alt={item.alt} sx={{
                    width: '150px',
                    height: '150px',
                }}/>
                <Box sx={{
                    pl: '20px',
                    textAlign: 'center',
                    maxWidth: '300px'
                }}>
                    <Typography variant='h6'>{item.name}</Typography>
                    <Typography variant='body1' gutterBottom>{item.position}</Typography>
                    <Typography variant='body2'>{item.description}</Typography>
                </Box>
            </Grid>
            ))}
        </Grid>
    </Box>
  )
}

const teamData = [
    {  
    id: "1",     
    img: "./images/avatar1.jpg",
    alt: "avatar 1",
    name: "Name 1",
    position: "Position 1",
    description: "Oat cake gummies caramels cake halvah chocolate bar sesame snaps shortbread marshmallow."
    },
    {  
    id: "2",     
    img: "./images/avatar2.jpg",
    alt: "avatar 2",
    name: "Name 2",
    position: "Position 2",
    description: "Oat cake gummies caramels cake halvah chocolate bar sesame snaps shortbread marshmallow."
    },
    {  
    id: "3",     
    img: "./images/avatar3.jpg",
    alt: "avatar 3",
    name: "Name 3",
    position: "Position 3",
    description: "Oat cake gummies caramels cake halvah chocolate bar sesame snaps shortbread marshmallow."
    }
]