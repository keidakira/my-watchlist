import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Search from "./pages/Search";
import MovieInfo from "./pages/MovieInfo";
import SeriesInfo from "./pages/SeriesInfo";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact strict path="/search">
          <Search />
        </Route>
        <Route exact strict path="/">
          <App />
        </Route>
        <Route strict path="/title">
          <MovieInfo />
        </Route>
        <Route strict path="/tv">
          <SeriesInfo />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
