import React from 'react'
import  css from"../Header/Header.css"
import Netflixlogo from "../../assets/images/pngimg.com - netflix_PNG32.png"
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className='headercontainer'>
      <div className='headerinsidecontainer'>
        <div className='headerleft'>
 
  
 <ul>

      <li className='Logo1'><img src={Netflixlogo}></img></li>
      <br></br>
       <li><a  href=''>Home</a></li>
       <li><a href=''>TV Shows</a></li>
       <li><a href=''>Movies</a></li>
       <li><a href=''>New&Popular</a></li>
       <li><a href=''>My List</a></li>
       <li><a href=''>Browse by Language</a></li>

       
   </ul>

</div>
<div className='headerright'>
 <ul>
   <li><a href='#'><SearchIcon/></a></li>
   <li><a href='#'>Kids</a></li>
   <li><a href='#'><NotificationsNoneIcon /></a></li>
    <li><a href='#'><AccountBoxIcon/></a></li>
   <li><a href='#'><ArrowDropDownIcon/></a></li>
 </ul>
</div></div>







    </div>
        
  )
}

export default Header
