import React, {Component} from 'react';
import LinesEllipsis from 'react-lines-ellipsis'
import PropTypes from 'prop-types';
import './Movie.css';

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

MoviePost.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre : PropTypes.string.isRequired
}

function Movie({title, poster, genres, synopsis}){
    return (
        <div className = 'Movie'>
            <div className = "Movie_Column">
                <MoviePost poster = {poster} alt = {title}/>
            </div>
            <div className = "Movie_Column">
                <h1>{title}</h1>
                <div className = "Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre = {genre} key = {index}/>)}
                </div>
                <p className = "Move_Synopsis">
                <LinesEllipsis
                    text= {synopsis}
                    maxLine='4'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
/>
                </p>
            </div>
        </div>
    );
}

function MoviePost({poster, alt}){
    return(
        <img src = {poster} alt = {alt} title = {alt} className = "Movie_poster"/>
    );// alt : 이미지가 안불러져왓을 경우 대체할 글, title : 마우스가 자겨다대면 나오는 글
}

function MovieGenre({genre}){
    return(
        <span className = "Movie_Genres">{genre} </span>
    );
}

export default Movie;