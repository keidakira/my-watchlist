import React from "react";
import values from "../utils/values";

import "./Episode.css";

function Episode({ data }) {
	return (
		<>
			<div className="episode" key={data.id}>
				<p className="episode__number">{data.episode_number}</p>
				<div className="episode__image">
					<img src={values.poster_baseUrl + data.still_path} />
				</div>
				<div className="episode__content">
					<p className="title">{data.name}</p>
					<p className="summary">{data.overview}</p>
				</div>
			</div>
			<hr />
		</>
	);
}

export default Episode;
