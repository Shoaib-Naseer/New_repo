import styled from '@emotion/styled'
import { Typography, FormControl,FormGroup,Input,InputLabel, Button } from '@mui/material'
import React, { useState } from 'react'
import { addBook } from '../services/api'
import {useNavigate} from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Container = styled(FormGroup)`
    width : 50%;
    margin: 30px auto 20px auto;
    & > div{
        margin-top:10px
    }
`

const AddBook = () => {
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [pages,setPages] = useState()
    const [published,setPublished   ] = useState(new Date())

    const navigate = useNavigate();
    const notify = () => {
        toast.success("SuccessFully Added new Book !", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          })
    }

    const clickHandler=async()=>{
        const data = {
            title,author,no_of_pages:Number(pages),published_at:published
        };
        if(!title ){
            toast.warn("Please Enter title ")
        }
        else if(!author){
            toast.warn("Please Enter author ")
       
        }
        else{
        
        await addBook(data);
        
        navigate("/")
        notify();
        }


    }
  return (
    <>
        <Container>
            <Typography variant='h4'>Add a Book </Typography>
            <FormControl>
                <InputLabel>Book Title *</InputLabel>
                <Input value={title}  onChange={(e)=>setTitle(e.target.value)} required/>
            </FormControl>

            <FormControl>
                <InputLabel>Author Name *</InputLabel>
                <Input value={author}  onChange={(e)=>setAuthor(e.target.value)} required  />
            </FormControl>

            <FormControl>
                <InputLabel>No of Pages</InputLabel>
                <Input value={pages}  onChange={(e)=>setPages(e.target.value)}/>
            </FormControl>

            <FormControl>
            <InputLabel>Published Date</InputLabel>
            <Input
                 type="date"
                autoComplete="off"
        
                value={
                published.getFullYear().toString() +
                  "-" +
                (published.getMonth() + 1).toString().padStart(2, 0) +
                "-" +
                published.getDate().toString().padStart(2, 0)
                }
                onChange={(e) => {
                setPublished(new Date(e.target.value));
                    }}
            />
            </FormControl>

            <FormControl>
                <Button sx={{width:105  }}variant='contained' onClick={clickHandler}> Add Book</Button>
                <ToastContainer />
            </FormControl>
            
            
            

            
        </Container>
    </>
  )
}

export default AddBook;