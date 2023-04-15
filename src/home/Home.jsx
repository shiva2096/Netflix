import React, { useState } from 'react'
import "./home.scss"
import Navbar from '../components/navbar/Navbar'

const Home = () => {
    const [isScrolled, setIsScrolled] = useState(false);  // If you make it inside Navbar, then it state change function runs twice

    return (
    <div className='home'>
        <Navbar isScrolled={isScrolled} setIsScrolled={setIsScrolled}/>

        <img id="homeImage" src="/images/home.jpeg" alt="" />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, assumenda neque officiis consequatur doloribus maxime ipsam amet earum, fugit, dolores in! Dolor error adipisci similique iure in ea reprehenderit.
    </div>
  )
}

export default Home