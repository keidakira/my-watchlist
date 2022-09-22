import React from "react";
import Person from "./Person";

import "./Cast.css";

function Cast({ id, data }) {
	return (
		<div className="cast">
			{data.map(
				(person) =>
					person.profile_path != null && (
						<Person key={person.id} data={person} />
					)
			)}
		</div>
	);
}

export default Cast;
