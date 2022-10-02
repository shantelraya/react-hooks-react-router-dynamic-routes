import React from "react";
import { Link } from "react-routr-dom";

function MOvieList({ movies }) {
    const renderMovies = Object.keys(movies).map((movieID) =>(
        <Li key={movieID}>
            <Link to={'/movies${movieID}'}>{movies[movieID].title}</Link>
        </Li>
    ));

    return <ul>{renderMovies}</ul>
}

export default MoviesList;