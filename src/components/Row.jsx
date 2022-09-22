import React, { useEffect, useState } from "react";
import requests from "../utils/requests";
import Movie from "./Movie";
import Series from "./Series";
import "./Row.css";

function Row({ title, fetchUrl, localUrl, type }) {
	const { api, urls, localAPI } = requests;
	const [movies, setMovies] = useState([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		async function getPopularMovies() {
			const response = localUrl
				? await localAPI.get(fetchUrl)
				: await api.get(fetchUrl);
			setMovies(response.data.results);
			setLoaded(true);

			return response;
		}

		getPopularMovies();
	}, [fetchUrl]);

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row__movies">
				{loaded &&
					movies.map((movie) => {
						return type == "movies" ? (
							<Movie data={movie} key={movie.id} />
						) : (
							<Series data={movie} key={movie.id} />
						);
					})}
			</div>
		</div>
	);
}

export default Row;
