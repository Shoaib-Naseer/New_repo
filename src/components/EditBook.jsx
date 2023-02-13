import styled from '@emotion/styled'
import { Typography, FormControl,FormGroup,Input,InputLabel, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { addBook } from '../services/api'
import {useNavigate , useParams} from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { getBook ,editBook} from '../services/api'

const Container = styled(FormGroup)`
    width : 50%;
    margin: 30px auto 20px auto;
    & > div{
        margin-top:10px
    }
`

const EditBook = () => {

    useEffect(()=>{
        getaBook()
     },[])   
     
     const getaBook = async()=>{
         let res =await getBook(id);
         setTitle(res.data.title)
         setAuthor(res.data.author)
         setPages(Number(res.data.no_of_pages))
         setPublished(new Date(res.data.published_at))
     }
     
    const {id} = useParams(); 
    const [title,setTitle] = useState("")
    const [author,setAuthor] = useState("")
    const [pages,setPages] = useState()
    const [published,setPublished   ] = useState(new Date())

    const navigate = useNavigate();
    const notify = () => {
        toast.success("Successfully Edited !", {
            position: toast.POSITION.TOP_RIGHT
          });
    }

    const clickHandler=async(id)=>{
        const data = {
            title,author,no_of_pages:Number(pages),published_at:published
        };
        const no_of_pages = Number(pages)
        console.log(no_of_pages)
        if(!title ){
            toast.warn("Please Enter title ")
        }
        else if(!author){
            toast.warn("Please Enter author ")
       
        }
        else{   
        await editBook(id,data);
        console.log("id is :",id)
        navigate("/")
        notify();
        }


    }
  return (
    <>
        <Container>
            <Typography variant='h4'>Edit the  Book </Typography>
            <FormControl>
                <InputLabel>Book Title</InputLabel>
                <Input value={title}  onChange={(e)=>setTitle(e.target.value)}/>
            </FormControl>

            <FormControl>
                <InputLabel>Author Name</InputLabel>
                <Input value={author}  onChange={(e)=>setAuthor(e.target.value)}/>
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
      {console.log(published)}
            </FormControl>

            <FormControl>
                <Button sx={{width:105  }}variant='contained' onClick={()=>clickHandler(id)}> Edit Book</Button>
             
            </FormControl>
            
            
            

            
        </Container>
    </>
  )
}

export default EditBook;