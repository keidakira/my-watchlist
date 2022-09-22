import React from "react";
import values from "../utils/values";

import "./Provider.css";

function Provider({ id, data }) {
	return (
		<div key={id} className="provider" title={data.name}>
			<img src={values.poster_baseUrl + data.logo_path} />
		</div>
	);
}

export default Provider;
