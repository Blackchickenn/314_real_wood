import React from 'react'
import { Card, CardActionArea, CardActions, CardMedia, CardContent, Typography, Button, Grid, Item, Box } from '@mui/material'
// import image from '../images./card2.jpeg'

export default function Ourwork() {
 
  return (
    <Grid container rowSpacing={5} columnSpacing={5} padding={10}>
      {itemData.map(item => (
        <Grid item xs={12} sm={12} md={6} lg={4}>
              <Card >
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
                    <Typography variant="body2" color="text.secondary">
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
  )
}


const itemData = [
  {   
      id: "1",
      title: "Title number one",
      img: "https://images.unsplash.com/photo-1650502446384-a07e09609ed7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      text: "Chupa chups muffin marshmallow donut lollipop pudding candy canes oat cake. Lollipop cookie tart oat cake jelly topping halvah dragée. Marzipan halvah shortbread apple pie gummi bears brownie. Cotton candy jelly-o icing jelly tootsie roll."
  },
  {   
      id: "2",
      title: "Title number two",
      img: "../images./card2.jpeg",
      text: "Jelly macaroon chocolate cake chocolate bar gummi bears dessert bear claw. Chocolate muffin donut tart shortbread sesame snaps. Caramels jelly beans gingerbread toffee shortbread cotton candy jelly candy canes icing."
  },
  {   
      id: "3",
      title: "Title number three",
      img: "https://source.unsplash.com/random",
      text: "Lollipop cake cheesecake fruitcake sweet jelly-o tiramisu. Muffin gummi bears pastry chupa chups carrot cake cake wafer sesame snaps. Liquorice gingerbread sesame snaps cake bear claw cookie biscuit dragée."
  },
  {   
      id: "4",
      title: "Title number four",
      img: "https://source.unsplash.com/random",
      text: "Chocolate candy canes candy canes jelly beans gingerbread. Cake ice cream jelly jelly oat cake lollipop jujubes. Muffin marzipan chocolate cake tiramisu sweet icing. Biscuit chocolate bar chocolate cake bonbon cotton candy ice cream sesame snaps dessert powder."
  },
  
]