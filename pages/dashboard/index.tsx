import React from 'react'
import Card from '@mui/material/Card'
import { Button, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'

const Dashboard = () => {
  const mokData = [
    'https://img1.wsimg.com/isteam/ip/d87fbec3-d78c-4239-96dd-6801390816cb/a04c1af90968d20a397beeaa82bc893d1bb3c412c-0003.jpg/:/rs=w:365,h:274,cg:true,m/cr=w:365,h:274',
    'https://img1.wsimg.com/isteam/ip/d87fbec3-d78c-4239-96dd-6801390816cb/a04c1af90968d20a397beeaa82bc893d1bb3c412c2f2ed.jpg/:/rs=w:365,h:274,cg:true,m/cr=w:365,h:274',
    'https://img1.wsimg.com/isteam/ip/d87fbec3-d78c-4239-96dd-6801390816cb/sourdough%203.jpeg.jpeg/:/rs=w:365,h:274,cg:true,m/cr=w:365,h:274',
    'https://img1.wsimg.com/isteam/ip/d87fbec3-d78c-4239-96dd-6801390816cb/Focaccia%201.jpeg.jpeg/:/rs=w:365,h:274,cg:true,m/cr=w:365,h:274',
    'https://img1.wsimg.com/isteam/ip/d87fbec3-d78c-4239-96dd-6801390816cb/a04c1af90968d20a397beeaa82bc893d1bb3c412c-0002.jpg/:/rs=w:365,h:274,cg:true,m/cr=w:365,h:274',
  ]
  return (
    <>
      <Typography variant="h1" color="primary" align="center">
        Dashboard
      </Typography>
      <div style={{ margin: '100px' }}>
        <Grid container spacing={2}>
          {mokData.map(item => (
            <Card sx={{ maxWidth: 345, margin: '20px' }}>
              <CardMedia component="img" height="200" image={item} alt="Pan de Chocolate" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pan de Chocolate
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Descripcion del producto
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Agregar al carrito</Button>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default Dashboard
