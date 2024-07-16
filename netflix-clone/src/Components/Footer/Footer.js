import React from 'react'
import css from '../Footer/Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className='footercontainer'>

      <div className='footersocials'>
      <li><a href='#'><FacebookIcon/></a></li>
     <li><a href='#'><InstagramIcon /></a></li>
     <li><a href='#'><TwitterIcon /></a></li>
    <li><a href='#'><YouTubeIcon/></a></li>

      </div>
      <div className='footerlists'>
        <div className='footerlist1'>
            <ul>
                <li><a href='#'>Audio Description</a></li>
                <br></br>
                <li><a href='#'>Investor Relations</a></li>
                <br></br>
                <li><a href='#'>Privacy</a></li>
                <br></br>
                <li><a href='#'>Contact Us</a></li>
            </ul>
        </div>
        <div className='footerlist2'>
            <ul>
            <li><a href='#'>Help Center</a></li>
            <br></br>
            <li><a href='#'>Jobs</a></li>
            <br></br>
            <li><a href='#'>Legal Notices</a></li>
            <br></br>
            <li><a href='#'>Ad Choices</a></li>
            </ul>
        </div>
        <div className='footerlist3'>
            <ul>
            <li><a href='#'>Gift Cards</a></li>
            <br></br>
            <li><a href='#'>Netflix Shop</a></li>
            <br></br>
            <li><a href='#'>Cookie Preferences</a></li>
            </ul>
        </div>
        <div className='footerlist4'>
            <ul>
            <li><a href='#'>Media Center</a></li>
            <br></br>
            <li><a href='#'>Terms of Use</a></li>
            <br></br>
            <li><a href='#'>Corporate Information</a></li>
            </ul>
        </div>
      </div>
      <br></br>
      <div className='footerservicecode'><button>Service Code</button></div>
      <br></br>
      <div className='footerlast'>@1977-2024 Netflix,Inc.</div>
      
    </div>
  )
}

export default Footer
