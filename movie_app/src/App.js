import React from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title : "아가씨",
    poster : "https://upload.wikimedia.org/wikipedia/ko/thumb/c/c4/%EC%95%84%EA%B0%80%EC%94%A8.jpg/250px-%EC%95%84%EA%B0%80%EC%94%A8.jpg"
  },
  {
    title : "사바하",
    poster : "http://img.movist.com/?img=/x00/05/12/45_p1.jpg"
  },
  {
    title : "기생충",
    poster : "https://w.namu.la/s/be4b5f93d882f07eed700cfbbff75cf0cf8838041770891f0da80afe53c700b39579a3e7357c0accf4455a7afa4fd7e8860ddb2db229f0df2375078cdea5a702dae16b39f9f21dac4977dd0f5ad771287be6b177a26e7a828a2c60df77345f26"
  }
]
function App() {
  return (
    <div className="App">
      {movies.map((movies, index) => {
        return <Movie title = {movies.title} poster = {movies.poster} key = {index}/>
      })} {/*map : map의 기본 원리는 간단합니다. 반복문을 돌며 배열 안의 요소들을 1대1로 짝지어 주는 것입니다. 그래서 이름이 map입니다. 매핑한다고 표현하죠. 어떻게 짝지어줄 것인가 정의한 함수를 메서드의 인자로 넣어주면 되는 것입니다.
            앨리먼트가 많을 경우, 각각 key를 부여해야함*/}
    </div>
  );
}

export default App;
