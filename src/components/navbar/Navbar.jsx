import React from 'react'
import "./navbar.scss"
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src="https://raw.githubusercontent.com/shiva2096/shiva2096.github.io/master/assets/img/profile-img.jpg" alt="" />
                <ArrowDropDown className='icon'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar