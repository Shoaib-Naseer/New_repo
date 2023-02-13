import styled from '@emotion/styled';
import { Table, TableHead, TableRow, Typography, TableCell, TableBody, Button } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { getBooks ,deleteBook} from '../services/api';
import { Link} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

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

const AllBooks = () => {
    const [books,setBooks] = useState([])

    useEffect(()=>{
        getAllBooks()
    },[])   

    const getAllBooks = async()=>{
        let response =await getBooks();
        setBooks(response.data)
        console.log(response.data)
    }

    const deleteNotification=()=>{
        toast.warn("Successfully Deleted !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 2000,
          });
    }
    const deleteHandler=async(id)=>{
        await deleteBook(id);
        deleteNotification();
        getAllBooks();
}

  return (
   <>
    <Typography sx={{textAlign:"center",marginTop:4}} variant="h4">All Books</Typography>
    <Container>
        <TableHeader>
            <TableRow >
                <TCell >Book No.</TCell>
                <TCell>Book Title</TCell>
                <TCell>Author Name</TCell>
                <TCell>Number of Pages</TCell>
                <TCell>Published Date</TCell>
                <TCell></TCell>
            </TableRow>
        </TableHeader>
        <TableBody>
            {
                books.map((item , index)=>(
                   
                    <TableRow>
                        <TableCell>{index+1}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.author}</TableCell>
                        <TableCell>{item.no_of_pages || "not available"}</TableCell>
                        {/* {  d = new Date(item.published_at)}
                           {date = d.getDate();}
                           {month = d.getMonth() + 1; }// Since getMonth() returns month from 0-11 not 1-12
                           year = d.getFullYear();
                           newDate = date + '/' + month + '/' + year;} */}
                        <TableCell>{new Date(item.published_at).getDate()+"/"+new Date(item.published_at).getMonth()+"/"+new Date(item.published_at).getDay()}</TableCell>
                        <TableCell>
                            <Button variant='outlined' sx={{marginRight:2}} component={Link} to={`/editBook/${item._id}`} >Edit</Button>
                            <Button variant='outlined' color="error" onClick={()=>deleteHandler(item._id)}>Delete</Button>
                        </TableCell>
                        <ToastContainer />
                        <ToastContainer />
                        <ToastContainer />

                    </TableRow>
                ))
            }
        </TableBody>
    </Container>
   </>
  )
}

export default AllBooks