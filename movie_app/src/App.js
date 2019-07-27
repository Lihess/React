import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component{
  state = {};

  componentDidMount(){
    fetch("https://yts.lt/api/v2/list_movies.json?sort by=rating")
    // then은 하나의 attribute(fetch의 결과 객체)만을 가짐
    .then(response => response.json()) //이진법으로 이루어진 데이터를 json으로 변경
    .then(json => console.log(json))
    .catch(err => console.log(err));
    //then : 그냥 작이 끝나면, catch : 에러 시
    //fetch() 함수는 API의 URL을 인자로 받고, 미래 시점에 얻게될 API 호출 결과를 Promise 객체로 리턴
  }

  _renderMovies= () =>{
    const movies = this.state.movies.map((movies, index) => {
      return <Movie title = {movies.title} poster = {movies.poster} key = {index}/>
    }) /*map : map의 기본 원리는 간단합니다. 반복문을 돌며 배열 안의 요소들을 1대1로 짝지어 주는 것입니다. 그래서 이름이 map입니다. 매핑한다고 표현하죠. 어떻게 짝지어줄 것인가 정의한 함수를 메서드의 인자로 넣어주면 되는 것입니다.
          앨리먼트가 많을 경우, 각각 key를 부여해야함*/
    return movies;
  }

  render(){
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
        {/* 데이터가 늘 즉시 가져올 수 있을리가 없으니, 이러한 방식으로 로딩을 기다림 */}
      </div>
    );
  }
}

export default App;
