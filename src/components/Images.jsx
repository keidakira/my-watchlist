import React from "react";
import values from "../utils/values";

function Images({ id, data }) {
	return (
		<div>
			<div className="backdrop_images">
				{data.backdrops.map((image) => {
					return (
						<img
							src={values.background_baseUrl + image.file_path}
							width="100%"
							alt="Backdrop Image"
							key={image.file_path}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Images;
