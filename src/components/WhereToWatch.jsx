import React, { useEffect, useState } from "react";
import requests from "../utils/requests";
import functions from "../utils/functions";

import Provider from "./Provider";
import values from "../utils/values";

function WhereToWatch({ id, location, type }) {
	const { urls, api } = requests;

	const [watchLocation, setWatchLocation] = useState(location);
	const [providers, setProviders] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [providerArray, setProviderArray] = useState([]);

	useEffect(() => {
		async function getProviders() {
			let url = urls.watchProviders;
			url = url.replace("<type>", type);
			url = url.replace("<TV_ID>", id);

			const response = await api.get(url);

			setProviders(response.data.results);
			setLoaded(true);

			if (loaded && !functions.objectEmpty(providers)) {
				if (providers[watchLocation] == null) {
					setWatchLocation(Object.keys(providers)[0]);
				}
			}

			if (
				loaded &&
				!functions.objectEmpty(providers) &&
				providers[watchLocation] != null
			) {
				let keys = Object.keys(providers[watchLocation]);
				let set = new Set();
				let seen = [];

				keys.map((k) => {
					if (k != "link") {
						providers[watchLocation][k].map((p) => {
							if (!seen.includes(p.provider_name)) {
								set.add({
									name: p.provider_name,
									logo_path: p.logo_path,
								});
							}
							seen.push(p.provider_name);
						});
					}
				});

				setProviderArray([...set]);
			}
		}

		getProviders();
	}, [loaded, watchLocation]);

	return (
		<div>
			{loaded && !functions.objectEmpty(providers) && (
				<div>
					Your Location:&nbsp;&nbsp;
					<select
						value={watchLocation}
						className="dropdown"
						onChange={(e) => setWatchLocation(e.target.value)}
					>
						{Object.keys(providers).map((country) => (
							<option value={country} key={country}>
								{country}
							</option>
						))}
					</select>
				</div>
			)}
			<br />
			<div>
				{!functions.objectEmpty(providers) ? (
					<p>You can watch it on:</p>
				) : (
					<p>No providers known</p>
				)}
				<br />
				<div style={{ display: "flex" }}>
					{loaded &&
						providerArray.map((p) => (
							<Provider key={p.name} data={p} />
						))}
				</div>
			</div>
		</div>
	);
}

export default WhereToWatch;
