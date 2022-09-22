import React, { useEffect, useState } from "react";
import requests from "../utils/requests";
import Navbar from "../components/Navbar";
import values from "../utils/values";
import functions from "../utils/functions";

import imdbLogo from "../images/imdb-logo.svg";
import rtLogo from "../images/rt-logo.svg";

import "./MovieInfo.css";
import Button from "../components/Button";
import Episodes from "../components/Episodes";
import Videos from "../components/Videos";
import Images from "../components/Images";
import Cast from "../components/Cast";
import WhereToWatch from "../components/WhereToWatch";

function MovieInfo() {
  const split_array = window.location.href.split("/");

  const movieId = split_array[4];

  const { localAPI, omdbAPI } = requests;

  const [info, setInfo] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [current, setCurrent] = useState(1);
  const [mainContentData, setMainContentData] = useState(null);

  useEffect(() => {
    async function getInfo() {
      const response = await localAPI.get("/movie/" + movieId);
      setInfo(response.data);
      setLoaded(true);

      return response;
    }

    getInfo();

    if (loaded) {
      if (current === 0) {
        setMainContentData(<Episodes />);
      } else if (current === 1) {
        setMainContentData(<Cast id={info.id} data={info.credits.cast} />);
      } else if (current === 2) {
        setMainContentData(<Videos id={info.id} data={info.videos.results} />);
      } else if (current === 3) {
        setMainContentData(<Images id={info.id} data={info.images} />);
      } else if (current === 4) {
        setMainContentData(
          <WhereToWatch id={info.id} location="US" type="movie" />
        );
      }
    }
  }, [movieId, current, loaded]);

  if (split_array.length !== 5) {
    return <p>Error</p>;
  }

  return (
    <div>
      <Navbar />
      {loaded ? (
        <div style={{ marginTop: 72 }}>
          <div
            className="backdrop_image"
            style={{
              backgroundImage: `url(${
                values.background_baseUrl + info.backdrop_path
              })`,
            }}
          >
            <div className="content">
              <div className="content__poster_block">
                <img
                  className="content__poster"
                  src={values.poster_baseUrl + info.poster_path}
                />
              </div>
              <div className="content__info">
                <p className="content__info__title">
                  {info.title} ({info.release_date.split("-")[0]})
                </p>
                <small>{functions.formatDate(info.release_date)}</small>
                &#8226;
                <small>{info.genres.map((g) => g.name).join(", ")}</small>
                <br />
                <br />
                <p className="content__info__overview">{info.overview}</p>
                {/* <div className="ratings">
									{info.ratings.length > 0 &&
										info.ratings[0].Source.includes(
											"Internet"
										) && (
											<div className="imdb">
												<img src={imdbLogo} />
												<p>
													{
														info.ratings[0].Value.split(
															"/"
														)[0]
													}
												</p>
											</div>
										)}
									{info.ratings.length > 0 &&
										info.ratings[0].Source.includes(
											"Rotten"
										) && (
											<div className="rt">
												<img src={rtLogo} />
												<p>{info.ratings[0].Value}</p>
											</div>
										)}
									{info.ratings.length > 1 &&
										info.ratings[1].Source.includes(
											"Rotten"
										) && (
											<div className="rt">
												<img src={rtLogo} />
												<p>{info.ratings[1].Value}</p>
											</div>
										)}
								</div> */}
                <br />
                {info.videos.results.filter((e) => e.type === "Trailer")
                  .length !== 0 && (
                  <Button
                    title="Watch Trailer"
                    link={functions.generateYoutubeLink(
                      info.videos.results.filter((e) => e.type === "Trailer")[0]
                        .key
                    )}
                    new_tab={true}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="main_content">
            <div className="main_content__menu">
              {/* <p
								className={current===0 && "active"}
								onClick={() => setCurrent(0)}
							>
								Overview
							</p> */}
              <p
                className={current === 1 && "active"}
                onClick={() => setCurrent(1)}
              >
                Cast
              </p>
              <p
                className={current === 2 && "active"}
                onClick={() => setCurrent(2)}
              >
                Videos
              </p>
              <p
                className={current === 3 && "active"}
                onClick={() => setCurrent(3)}
              >
                Images
              </p>
              <p
                className={current === 4 && "active"}
                onClick={() => setCurrent(4)}
              >
                Where to Watch?
              </p>
            </div>
            <div className="main_content__data">{mainContentData}</div>
          </div>
        </div>
      ) : (
        <p style={{ marginTop: 72 }}>Loading</p>
      )}
    </div>
  );
}

export default MovieInfo;
