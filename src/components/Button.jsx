import React from "react";

import "./Button.css";

import playIcon from "../images/play.svg";

function Button({ title, link, new_tab }) {
	return (
		<a
			href={link}
			target={new_tab ? "_blank" : "_self"}
			style={{ display: "inline-block" }}
		>
			<button>
				<img src={playIcon} />
				<span>{title}</span>
			</button>
		</a>
	);
}

export default Button;
