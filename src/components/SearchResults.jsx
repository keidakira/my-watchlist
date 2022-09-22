import React, { useEffect, useState } from "react";
import requests from "../utils/requests";
import Movie from "./Movie";
import Series from "./Series";
import InfiniteScroll from "react-infinite-scroll-component";

import "./SearchResults.css";

function SearchResults({ query, type }) {
	const { api, urls, localAPI } = requests;
	const [page, setPage] = useState(1);
	const [movies, setMovies] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [searchEnd, setSearchEnd] = useState(false);
	const fetchUrl = `/search?query=${query}&type=${type}`;

	useEffect(() => {
		async function getSearchResults(url, initialResults) {
			const response = await localAPI.get(url);
			setMovies([...initialResults, ...response.data.results]);
			setLoaded(true);

			return response;
		}

		getSearchResults(fetchUrl, []);
	}, [fetchUrl]);

	const fetchData = () => {
		let url = fetchUrl + `&page=${page + 1}`;
		setPage(page + 1);

		async function getSearchResults(url, initialResults) {
			const response = await localAPI.get(url);
			if (response.data.results.length == 0) {
				setSearchEnd(true);
			}
			setMovies([...initialResults, ...response.data.results]);
			setLoaded(true);

			return response;
		}

		getSearchResults(url, movies);
	};

	return (
		<div className="search_results" id="search_results">
			<InfiniteScroll
				dataLength={movies.length}
				next={fetchData}
				hasMore={!searchEnd}
				loader={<p>Loading....</p>}
			>
				{movies.map(
					(movie) =>
						(movie.media_type == "movie" ||
							movie.media_type == "tv") &&
						movie.poster_path != null &&
						(movie.media_type == "movie" ? (
							<Movie data={movie} id={movie.id} />
						) : (
							<Series data={movie} id={movie.id} />
						))
				)}
			</InfiniteScroll>
		</div>
	);
}

export default SearchResults;
