import React, { useRef, useState } from 'react'
import "./list.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import ListItem from '../listItem/ListItem'

const List = () => {
    const [hideLeftArrow, setHideLeftArrow] = useState(true);
    const [slideNumber, setSlideNumber] = useState(0);

    const listRef = useRef();
    const leftArrRef = useRef();
    const rightArrRef = useRef();

    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if(direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230+distance}px)`;
        }
        if(direction === "left"){
            leftArrRef.current.style.animation = `btn-pop 400ms ease-in-out`;
        }

        if(direction === "right" && slideNumber < 4) {
            setHideLeftArrow(false);
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230+distance}px)`;
        }
        if(direction === "right"){
            rightArrRef.current.style.animation = `btn-pop 400ms ease-in-out`;
        }
        
    }

    const handleEnd = (direction) => {
        if(direction === "left") {
            leftArrRef.current.style.animation = `null`;
        }

        if(direction === "right") {
            rightArrRef.current.style.animation = `null`;
        } 
    }
    
  return (
    <div className="list">
        <span className="listTitle">Continue to watch</span>
        <div className="wrapper">
            <ArrowBackIosOutlined 
                className="sliderArrow left" 
                onClick={()=>handleClick("left")} 
                onAnimationEnd={()=>handleEnd("left")}
                style={{display: hideLeftArrow && "none" }} 
                ref={leftArrRef} 
            />
            <div className="container" ref={listRef}>
                <ListItem index={0}/>
                <ListItem index={1}/>
                <ListItem index={2}/>
                <ListItem index={3}/>
                <ListItem index={4}/>
                <ListItem index={5}/>
                <ListItem index={6}/>
                <ListItem index={7}/>
                <ListItem index={8}/>
                <ListItem index={9}/>
            </div>
            <ArrowForwardIosOutlined 
                className="sliderArrow right" 
                ref={rightArrRef} 
                onClick={()=>handleClick("right")} 
                onAnimationEnd={()=>handleEnd("right")}
            />
        </div>
    </div>
  )
}

export default List