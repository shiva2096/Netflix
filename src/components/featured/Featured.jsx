import React, { useEffect, useState } from "react"
import "./featured.scss"
import { InfoOutlined, PlayArrow } from "@mui/icons-material"
import api from "../../api/netflix"
import { Link } from "react-router-dom"

const Featured = (props) => {
	const { type } = props

	const [content, setContent] = useState({})

	useEffect(() => {
		const getRandomContent = async () => {
			try {
				const res = await api.get(`/movies/random?type=${type}`, {
					headers: {
						token:
							"Bearer " +
							"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDQ1NGM2MDU2MDI5ZmJmY2JmOGE2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjI4NTA4MywiZXhwIjoxNjgyNzE3MDgzfQ.5LTcPa6iFi7ysUcHqt1mVLgq4Zzd9fNa0KfAZs_4bQ8",
					},
				})
				setContent(res.data[0])
			} catch (err) {
				console.log(err)
			}
		}
		getRandomContent()
	}, [type])
	console.log(content)
	return (
		<div className="featured">
			{type && (
				<div className="category">
					<span>{type === "movies" ? "Movies" : "Series"}</span>
					<select name="genre" id="genre">
						<option>Genre</option>
						<option value="adventure">Adventure</option>
						<option value="comedy">Comedy</option>
						<option value="crime">Crime</option>
						<option value="fantasy">Fantasy</option>
						<option value="historical">Historical</option>
						<option value="horror">Horror</option>
						<option value="romance">Romance</option>
						<option value="sci-fi">Sci-fi</option>
						<option value="thriller">Thriller</option>
						<option value="western">Western</option>
						<option value="animation">Animation</option>
						<option value="drama">Drama</option>
						<option value="documentary">Documentary</option>
					</select>
				</div>
			)}
			<img id="homeImage" src={content.img} alt="" />
			<div className="info">
				<img src={content.imgTitle} alt="" />
				<span className="desc">{content.desc}</span>
				<div className="buttons">
					<Link to="/watch" state={{ movie: content }}>
						<button className="play">
							<PlayArrow />
							<span>Play</span>
						</button>
					</Link>
					<button className="more">
						<InfoOutlined />
						<span>Info</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Featured
