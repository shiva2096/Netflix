import React from 'react'
import "./featured.scss"
import { InfoOutlined, PlayArrow } from '@mui/icons-material'


const Featured = () => {
  return (
    <div className="featured">
        <img id="homeImage" src="/images/featured.jpeg" alt="" />
        <div className="info">
            <img src="/images/featured_logo.png" alt="" />
            <span className="desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa amet vero quae, cumque id eos, animi cum deleniti ex voluptas assumenda itaque, architecto fugit repellat sint! Sint a eaque enim.
            </span>
            <div className="buttons">
                <button className="play">
                    <PlayArrow/>
                    <span>Play</span>
                </button>
                <button className="more">
                    <InfoOutlined/>
                    <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Featured