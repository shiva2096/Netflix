import React, { useState } from 'react'
import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);  // If you make it inside Navbar, then it state change function runs twice

    return (
    <div className='home'>
        <Navbar isScrolled={isScrolled} setIsScrolled={setIsScrolled}/>
        <Featured type="movie"/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}

export default Home