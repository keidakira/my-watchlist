import React, { useState, useEffect } from "react";
import functions from "../utils/functions";
import requests from "../utils/requests";
import Episode from "./Episode";

function Episodes({ id, data, season_count }) {
	let seasons = [];
	const { urls, api } = requests;

	const [season, setSeason] = useState(1);
	const [seasonInfo, setSeasonInfo] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		async function getSeasonInfo() {
			let url = urls.seasonInfo;
			url = url.replace("<TV_ID>", id);
			url = url.replace("<SEASON_NUMBER>", season);

			const response = await api.get(url);

			setSeasonInfo(response.data);
			setLoaded(true);
		}

		getSeasonInfo();
	}, [season]);

	for (let i = 1; i <= season_count; i++) seasons.push(i);

	return (
		<div>
			<select
				className="dropdown"
				value={season}
				onChange={(e) => setSeason(e.target.value)}
			>
				{seasons.map((x) => (
					<option value={x} key={x}>
						Season {x}
					</option>
				))}
			</select>
			<br />
			<br />
			<div className="episodes">
				<hr />
				{loaded &&
					seasonInfo.episodes.map(
						(ep) =>
							functions.compareDates(
								new Date().getTime(),
								ep.air_date
							) && <Episode data={ep} key={ep.id} />
					)}
			</div>
		</div>
	);
}

export default Episodes;
