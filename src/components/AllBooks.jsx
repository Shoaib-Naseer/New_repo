import styled from '@emotion/styled';
import { Table, TableHead, TableRow, TableCell, TableBody, Grid, } from '@mui/material'
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Container = styled(Table)`
    width : 90%;
    margin: 30px auto 20px auto;
    & > div{
        margin-top:10px
    }
`

const TableHeader = styled(TableHead)`
    background : #000000;
    & > th {
        color:#ffffff
    }
`
const TCell = styled(TableCell)`
        color:#ffffff
`

const AllBooks = ({books}) => {
    return(
        <Grid container gap={2} sx={{textAlign:"center",marginTop:8, padding:'0 1rem'}}>
        {books.map((item)=>(
            
             <Grid item xs={10} sm={6} md={4} lg={3} >
                   <Card sx={{ margin:'2rem 4rem'} } >
      <CardMedia 
        sx={{ height: 140  }}
        image={item.image}
        title="Book Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Any Description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Book title</Button>
        <Button size="small">Book author</Button>
      </CardActions>
    </Card>
                </Grid>
           
        ))}
        </Grid>
    )
}

export default AllBooks