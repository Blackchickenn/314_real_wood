import React from 'react'
import { Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button, Grid, Item, Box } from '@mui/material'



export default function Ourwork() {

  return (
    <Box className='ourwork-background-image' sx={{
      // backgroundImage: 'url(../images/bg5.jpg)',
      textAlign: 'center'
    }}>
    <Typography variant='h4' sx={{
      fontFamily: 'Bebas Neue',
      letterSpacing: '3px',
      margin: 'auto',
      mt:'30px',
      borderLeft:'2px solid black',
      borderRight:'2px solid black',
      pl:'20px',
      pr:'20px',
      display: 'inline-block'
    }}>
      OUR WORK</Typography>
    <Grid container rowSpacing={5} columnSpacing={5} sx={{
    paddingY: {
      xs: "50px",
      sm: "50px",
      md: "50px",
      lg: "50px",
      xl: "50px",
    },
    paddingX:{
      xs: "50px",
      sm: "50px",
      md: "50px",
      lg: "50px",
      xl: "50px",
    }
    }}>
      {itemData.map(item => (
        <Grid item xs={12} sm={12} md={6} lg={4} display='flex' justifyContent='center'>
              <Card sx={{
                maxWidth:{
                  xs: '350px',
                  sm: '600px',
                },
                
              }}>
                <CardActionArea> 
                  <CardMedia
                    component="img"
                    height="200"
                    src={item.img}
                    alt={item.id}
                  />
                  <CardContent> 
                      <Typography gutterBottom variant="h5" component="div" >
                        {item.title}
                      </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{
                      height: {
                        xs: '120px',
                        sm: '60px',
                        md: '100px'
                      }
                    }}>
                      {item.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{
                  justifyContent: 'center',
                  pb: '20px'
                }}>
                  <Button variant='outlined'>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
        </Grid>
      ))} 
    </Grid>
    </Box>
  )
}


const itemData = [
  {   
      id: "1",
      title: "Title number one",
      img: "../images/card1.jpeg",
      text: "Chupa chups muffin marshmallow donut lollipop pudding candy canes oat cake. Lollipop cookie tart oat cake jelly topping halvah dragée. Marzipan halvah shortbread apple pie gummi bears brownie. Cotton candy jelly-o icing jelly tootsie roll."
  },
  {   
      id: "2",
      title: "Title number two",
      img: "../images/card2.jpeg",
      text: "Jelly macaroon chocolate cake chocolate bar gummi bears dessert bear claw. Chocolate muffin donut tart shortbread sesame snaps. Caramels jelly beans gingerbread toffee shortbread cotton candy jelly candy canes icing."
  },
  {   
      id: "3",
      title: "Title number three",
      img: "../images/card3.jpeg",
      text: "Lollipop cake cheesecake fruitcake sweet jelly-o tiramisu. Muffin gummi bears pastry chupa chups carrot cake cake wafer sesame snaps. Liquorice gingerbread sesame snaps cake bear claw cookie biscuit dragée."
  },
  {   
      id: "4",
      title: "Title number four",
      img: "../images/card4.jpeg",
      text: "Chocolate candy canes candy canes jelly beans gingerbread. Cake ice cream jelly jelly oat cake lollipop jujubes. Muffin marzipan chocolate cake tiramisu sweet icing. Biscuit chocolate bar chocolate cake bonbon cotton candy."
  },
  {   
      id: "5",
      title: "Title number five",
      img: "../images/card5.jpeg",
      text: "Jelly beans icing cupcake jujubes ice cream jujubes shortbread cheesecake chupa chups. Croissant cotton candy cake apple pie cheesecake cake macaroon croissant. Croissant soufflé jujubes chocolate bar apple pie gummi bears halvah croissant."
  },
  {   
      id: "6",
      title: "Title number six",
      img: "../images/card6.jpg",
      text: "Cheesecake pudding jelly sugar plum croissant ice cream pudding lollipop apple pie. Chupa chups dragée croissant chupa chups gummies. Icing shortbread liquorice fruitcake bear claw tart bear claw cotton candy marzipan."
  },
]