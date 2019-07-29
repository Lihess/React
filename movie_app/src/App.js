import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';


class App extends Component{
  state = {};

  componentDidMount(){
    this._makeMovies();
  }

  _renderMovies= () =>{
    const movies = this.state.movies.map((movies, index) => {
      return <Movie 
        title = {movies.title_english}
        poster = {movies.medium_cover_image}
        genres = {movies.genres}
        synopsis = {movies.synopsis}
        key = {movies.id}/>
    }) /*map : map의 기본 원리는 간단합니다. 반복문을 돌며 배열 안의 요소들을 1대1로 짝지어 주는 것입니다. 그래서 이름이 map입니다. 매핑한다고 표현하죠. 어떻게 짝지어줄 것인가 정의한 함수를 메서드의 인자로 넣어주면 되는 것입니다.
          앨리먼트가 많을 경우, 각각 key를 부여해야함*/
    return movies;
  }

  _makeMovies = async() => {
    const movies = await this._callAPi(); 
    // await : callAPi가 무엇을 리턴하던 간(성공적이지 않아도)에 끝나면, movie에 !!
    // 밑에 추가된 코드가 있다면 이러한 작업을 기다리고 실행될것
    this.setState({
      movies
    })
  }

  _callAPi = () => {
    return fetch("https://yts.lt/api/v2/list_movies.json?sort by=download_count")
    // then은 하나의 attribute(fetch의 결과 객체)만을 가짐
    .then(response => response.json()) //이진법으로 이루어진 데이터를 json으로 변경
    .then(json => json.data.movies)
    .catch(err => console.log(err));
    //then : 그냥 작이 끝나면, catch : 에러 시
    //fetch() 함수는 API의 URL을 인자로 받고, 미래 시점에 얻게될 API 호출 결과를 Promise 객체로 리턴
  }  //then을 너무 많이 쓰면 콜백지옥으로..
  // componentDidMount 의 크기는 줄이는 것이 좋기에 이렇게 나눠서!
  // => 자체가 리턴의 의미를 포함함

  render(){
    const {movies} = this.state;
    return (
      <div className= {movies ? "App" : "App--loading"}>
        {this.state.movies ? this._renderMovies() : "Loading"}
        {/* 데이터가 늘 즉시 가져올 수 있을리가 없으니, 이러한 방식으로 로딩을 기다림 */}
      </div>
    );
  }
}

export default App;
