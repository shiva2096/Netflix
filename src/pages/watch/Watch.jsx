import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import "./watch.scss"
import { ArrowBackIosOutlined } from "@mui/icons-material"

const Watch = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const movie = location.state.movie
	return (
		<div className="watch">
			<div className="back" onClick={() => navigate("/")}>
				<ArrowBackIosOutlined />
				Home
			</div>
			<video
				className="video"
				autoPlay
				progress
				controls
				src={movie.video}
			></video>
		</div>
	)
}

export default Watch
