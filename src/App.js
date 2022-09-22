import "./App.css";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import requests from "./utils/requests";

function App() {
  const { urls } = requests;

  return (
    <div className="App">
      <Navbar />
      <Row
        title="Trending TV Shows"
        fetchUrl={urls.weeklytrendingShows}
        type="series"
      />
      <Row
        title="Trending Movies"
        fetchUrl={urls.weeklytrendingMovies}
        type="movies"
      />
      <Row
        title="Top Rated Movies"
        fetchUrl={urls.topRatedMovies}
        type="movies"
      />
      <Row
        title="Top Rated TV Shows"
        fetchUrl={urls.topRatedShows}
        type="series"
      />
      <Row
        title="Popular TV Shows"
        fetchUrl={urls.popularShows}
        type="series"
      />
      {/* <Row
        title="Trending Telugu Movies"
        fetchUrl="/movies/trending/telugu"
        localUrl={true}
        type="movies"
      /> */}
    </div>
  );
}

export default App;
