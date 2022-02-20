import React, {useState} from 'react';
// 'react'에 있는 내장 함수(useState)를 사용하겠다고 선언하는 것

import './App.css';

function App() {
  // state 만드는 방법
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '잔망루피 짱']);
  // ES6 destructuring 문법 사용
  // let 글제목 = ['남자 코트 추천', '강남 우동 맛집', '잔망루피 짱'];
  // let 글제목변경 = 글제목 state 데이터를 변경(수정)하는 함수

  // let [글제목, 글제목변경] = useState("남자 코트 추천");
  // useState("남자 코트 추천") : state(데이터 저장 공간)를 만드는 방법

  // let posts = "일반변수제목";
  
  let [objTest, objTestFunc] = useState({name : "Kim", age : 50});

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <div className='list'>
        <h3>{글제목[0]}</h3>
        <h3>{글제목}</h3> {/* array를 단순 글자를 바꿔서 출력 */}
        <h3>{objTest.name}</h3>
        <h3>{objTest.age}</h3>
        <p>2월 20일 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h3>{글제목[1]}</h3>
        <p>2월 21일 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h3>{글제목[2]}</h3>
        <p>2월 22일 발행</p>
        <hr/>
      </div>

    </div>
  );
}

export default App;