import React from 'react'
import "./watch.scss"
import { ArrowBackIosOutlined } from '@mui/icons-material'

const Watch = () => {
  return (
    <div className="watch">
        <div className="back">
            <ArrowBackIosOutlined/>
            Home
        </div>
        <video className="video" autoPlay progress controls src="/images/full_video.mp4"></video>
    </div>
  )
}

export default Watch