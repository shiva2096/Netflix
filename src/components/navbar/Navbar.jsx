import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./navbar.scss"
import { ArrowDropDown, Notifications, Search } from '@mui/icons-material'

const Navbar = (props) => {
    // Creating a useState hook to store the state of scroll
    const {isScrolled, setIsScrolled} = props;
    const navigate = useNavigate();
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);  // Preventing infinite loop
    }

    return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
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
                
                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span onClick={()=>navigate("/login")}>Logout</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar