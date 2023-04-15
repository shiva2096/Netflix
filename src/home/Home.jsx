import React, { useState } from 'react'
import "./home.scss"
import Navbar from '../components/navbar/Navbar'
import Featured from '../components/featured/Featured';

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);  // If you make it inside Navbar, then it state change function runs twice

    return (
    <div className='home'>
        <Navbar isScrolled={isScrolled} setIsScrolled={setIsScrolled}/>
        <Featured/>
    </div>
  )
}

export default Home