import React from 'react';
import {AppBar,Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background : #111111
`
const Tab = styled(NavLink)`
    font-size : 20px;
    margin-left: 20px;
    color: #FFFFFF;
    text-decoration:none
`

const Navbar = () => {
  return (
   <Header position='static'>
    <Toolbar>
        <Tab to='/'>View All Books</Tab>
    </Toolbar>
   </Header>
  )
}

export default Navbar