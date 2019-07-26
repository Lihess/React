import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
    static propTypes = {
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
        // npm install —save prop-types 명령어로 따로 설치해야 함
        // props의 타입을 지정할 수 있고, 지정된 타입 아니라면 오류
        //isRequied 를 덧 붙이면 필수라는 뜻!
    }

    render() { 
        return (
            <div>
                <h1> {this.props.title}</h1>
                <MoviePost poster = {this.props.poster}/>
            </div>);
    }
}
 
class MoviePost extends Component{
    static propTypes = {
        poster : PropTypes.string.isRequired
    }

    render(){
        return(
            <img src = {this.props.poster} alt = ""/>
        );
    }
}

export default Movie;