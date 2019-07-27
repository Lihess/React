import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

MoviePost.propTypes = {
    poster : PropTypes.string.isRequired
}


function Movie({title, poster}){
    return (
        <div>
            <h1> {title}</h1>
            <MoviePost poster = {poster}/>
        </div>
        );
}

function MoviePost({poster}){
    return(
        <img src = {poster} alt = ""/>
    );
}

export default Movie;