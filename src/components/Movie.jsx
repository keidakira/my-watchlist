import React from "react";
import { Link } from "react-router-dom";
import values from "../utils/values";
import "./Movie.css";

function Movie({ data }) {
	const dummy_poster =
		"https://keep-calm.net/images/keep-calm-and-netflix-and-chill-600-800.jpg";
	return (
		<div className="movie" id={data.id}>
			<Link to={"/title/" + data.id}>
				<img
					src={
						data.poster_path == null
							? dummy_poster
							: values.poster_baseUrl + data.poster_path
					}
					title={data.title}
				/>
			</Link>
		</div>
	);
}

export default Movie;
