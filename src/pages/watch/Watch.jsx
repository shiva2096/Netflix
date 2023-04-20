import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./watch.scss"
import { ArrowBackIosOutlined } from '@mui/icons-material'

const Watch = () => {
  const navigate = useNavigate();
  
  return (
    <div className="watch">
        <div className="back" onClick={()=>navigate("/home")}>
            <ArrowBackIosOutlined/>
            Home
        </div>
        <video className="video" autoPlay progress controls src="/images/full_video.mp4"></video>
    </div>
  )
}

export default Watch