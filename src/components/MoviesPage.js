import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import MovieShow from "./MovieShow";
import MoviesList from "./MovieShow";

function MoviesPage({ movies }) {
  const match = useRouteMatch();

  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={'${match.url}/:movieID'}>
        <MovieShow movies={movies}/>
      </Route>
    </div>
  );
}
export default MoviesPage;
