import React from "react";
import YouTube from "react-youtube";

function Videos({ id, data }) {
	return (
		<div className="movie_info__videos">
			{data.length != 0 &&
				data.map((video) => (
					<YouTube videoId={video.key} key={video.key} />
				))}
			{data.length == 0 && <p>No Videos available</p>}
		</div>
	);
}

export default Videos;
