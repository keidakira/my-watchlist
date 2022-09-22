import React from "react";
import { Link } from "react-router-dom";
import values from "../utils/values";
import "./Series.css";

function Series({ data }) {
	const dummy_poster =
		"https://keep-calm.net/images/keep-calm-and-netflix-and-chill-600-800.jpg";
	return (
		<div className="tv" id={data.id}>
			<Link to={"/tv/" + data.id}>
				<img
					src={
						data.poster_path == null
							? dummy_poster
							: values.poster_baseUrl + data.poster_path
					}
					title={data.name}
				/>
			</Link>
		</div>
	);
}

export default Series;
