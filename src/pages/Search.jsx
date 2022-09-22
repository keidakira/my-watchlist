import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchResults from "../components/SearchResults";
import "./Search.css";

function Search() {
	const [query, setQuery] = useState("");
	return (
		<>
			<Navbar />
			<div className="search__container">
				<input
					type="text"
					className="search__container__input"
					autoFocus
					placeholder="Start typing..."
					onChange={(e) => setQuery(e.target.value)}
				/>
				{query != "" && (
					<div>
						<br />
						<br />
						<p>
							Showing search results for: <b>{query}</b>
						</p>
						{query.length > 3 && (
							<SearchResults query={query} type="movies" />
						)}
					</div>
				)}
			</div>
		</>
	);
}

export default Search;
