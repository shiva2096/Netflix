import React, { useEffect, useState } from "react"
import "./home.scss"
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import List from "../../components/list/List"
import api from "../../api/netflix"

const Home = ({ type }) => {
	const [isScrolled, setIsScrolled] = useState(false) // If you make it inside Navbar, then it state change function runs twice
	const [lists, setLists] = useState([])
	const [genre, setGenre] = useState(null)

	useEffect(() => {
		const getRandomLists = async () => {
			try {
				// eg. lists?type=series&genre=adventure
				const res = await api.get(
					`lists${type ? "?type=" + type : ""}${
						genre ? "&genre=" + genre : ""
					}`,
					{
						headers: {
							token:
								"Bearer " +
								"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDQ1NGM2MDU2MDI5ZmJmY2JmOGE2MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjI4NTA4MywiZXhwIjoxNjgyNzE3MDgzfQ.5LTcPa6iFi7ysUcHqt1mVLgq4Zzd9fNa0KfAZs_4bQ8", //JSON.parse(localStorage.getItem("user")).accessToken,
						},
					}
				)
				setLists(res.data)
			} catch (err) {
				console.log(err)
			}
		}
		getRandomLists()
	}, [type, genre])

	return (
		<div className="home">
			<Navbar isScrolled={isScrolled} setIsScrolled={setIsScrolled} />
			<Featured type={type} />
			{lists.map((list) => (
				<List list={list} />
			))}
		</div>
	)
}

export default Home
