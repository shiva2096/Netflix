import React, { useState, useEffect } from "react"
import "./listItem.scss"
import {
	Add,
	PlayArrow,
	ThumbDownAltOutlined,
	ThumbUpAltOutlined,
} from "@mui/icons-material"
import { useNavigate, Link } from "react-router-dom"
import api from "../../api/netflix"

const ListItem = (props) => {
	const [isHovered, setIsHovered] = useState(false)
	const [movie, setMovie] = useState({})
	const { index, item } = props
	const navigate = useNavigate()

	useEffect(() => {
		const fetchMovies = async () => {
			try {
				const res = await api.get("/movies/find/" + item, {
					headers: {
						token:
							"Bearer " +
							"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDQ1NGM2MDU2MDI5ZmJmY2JmOGE2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjI4NTA4MywiZXhwIjoxNjgyNzE3MDgzfQ.5LTcPa6iFi7ysUcHqt1mVLgq4Zzd9fNa0KfAZs_4bQ8",
					},
				})
				setMovie(res.data)
			} catch (err) {
				console.log(err)
			}
		}
		fetchMovies()
	}, [item])

	return (
		<Link to="/watch" state={{ movie: movie }}>
			<div
				className="listItem"
				style={{ left: isHovered && index * 227.5 - 50 }}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<img src={movie.imgSm} alt="" />
				{isHovered && (
					<>
						<video src={movie.trailer} autoPlay={true} loop></video>
						<div className="itemInfo">
							<div className="icons">
								<PlayArrow
									className="icon"
									onClick={() => navigate("/watch")}
								/>
								<Add className="icon" />
								<ThumbUpAltOutlined className="icon" />
								<ThumbDownAltOutlined className="icon" />
							</div>
							<div className="itemInfoTop">
								<span>{movie.duration}</span>
								<span className="limit">{movie.limit}</span>
								<span>{movie.year}</span>
							</div>
							<div className="title">{movie.title}</div>
							<div className="desc">{movie.desc}</div>
							<div className="genre">{movie.genre}</div>
						</div>
					</>
				)}
			</div>
		</Link>
	)
}

export default ListItem
