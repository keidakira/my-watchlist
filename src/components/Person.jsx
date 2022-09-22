import React from "react";
import values from "../utils/values";

import "./Person.css";

function Person({ data }) {
	return (
		<div className="person">
			<img src={values.poster_baseUrl + data.profile_path} />
			<div className="person__info">
				<p>{data.name}</p>
				<p>{data.character[0] == "(" && data.character}</p>
				<p>
					{data.character[0] != "(" &&
						data.character != "" &&
						`(${data.character})`}
				</p>
				<br />
			</div>
		</div>
	);
}

export default Person;
