import React, { useState } from 'react'
import "./listItem.scss"
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'

const ListItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const {index} = props;
  const trailer = "/images/trailer.mp4"

  return (
    <div className='listItem' 
      style={{left: isHovered && (index*227.5) -50}}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}>

      <img src="/images/poster.jpg" alt="" />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpAltOutlined className="icon"/>
              <ThumbDownAltOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hr 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem officia animi non est repellat illum voluptates modi fugit nemo, nulla ab neque! Ea eum similique rem. Repellendus iste ipsa nesciunt.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ListItem