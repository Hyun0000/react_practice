import React, {useState} from 'react';
import './App.css';

function App() {
  // 글제목
  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '잔망루피 짱']);  
  // 따봉(좋아요)
  let [good, goodChange] = useState(0);
  // 글제목 변경 함수

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <div className='list'>
        <h3>
          {title[0]}
          <span onClick = {() => {goodChange(good + 1);}}>👍</span>{good}
        </h3>
        <p>2월 20일 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h3>{title[1]}</h3>
        <p>2월 21일 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h3>{title[2]}</h3>
        <p>2월 22일 발행</p>
        <hr/>
      </div>

    </div>
  );

}

export default App;