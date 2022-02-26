import React, {useState} from 'react';
import './App.css';

function App() {
// -------------------------- 변수 및 state 선언 부분 --------------------------
  // 글제목
  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '잔망루피 짱']);  

  // 따봉(좋아요)
  let [good, goodChange] = useState([0,1,2]);
// -------------------------- 함수 선언 부분 --------------------------
  // 글제목 변경 함수
  function changeTitle() {
    let newTitlesArr = [...title];
    // 수정을 위해 state 변경함수에 집어넣을 data를 만들자
    // 단, spread operator를 이용해 배열의 deep copy를 해야한다.
    // 값 공유를 하면 안 된다.(원본 state는 수정되면 안 된다.)
// -------------------------- 함수 선언 부분 --------------------------
    // 방법1
    newTitlesArr.forEach(function(e, index) {
      if(e === title[0]) {
        newTitlesArr[index] = "여자 코트 추천";
      }
    });

    // 방법2
    // for (let i = 0; i < newTitlesArr.length; i++) {
    //   if(newTitlesArr[i] === title[0]) {
    //     newTitlesArr[i] = "여자 코트 추천";
    //   }
    // }

    // 방법3
    // newTitlesArr = ['여자 코트 추천', '강남 우동 맛집', '잔망루피 짱']

    // state는 반드시 'state 변경함수'를 이용해 변경해야 한다.
    titleChange(newTitlesArr);
  }

  function sortArr() {
    let newTitlesArr2 = [...title];
    titleChange(newTitlesArr2.sort());
  }

  function goodUp(event) {
    let newGoodArr = [...good];
    let goodSpan = document.querySelectorAll('span');
    goodSpan.forEach((e,index) => {
      if(event.target === e) {
        newGoodArr[index]++;
      }
    });
    goodChange(newGoodArr);
  }
// -------------------------- return 부분 --------------------------
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button onClick={changeTitle}>제목 변경</button>
      <br/>
      <button onClick={sortArr}>글 정렬</button>

      <div className='list'>
        <h3>
          {title[0]}
          <span onClick = {goodUp}>1번👍</span>{good[0]}
        </h3>
        <p>2월 20일 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h3>
          {title[1]}
          <span onClick = {goodUp}>2번👍</span>{good[1]}
        </h3>
        <p>2월 21일 발행</p>
        <hr/>
      </div>

      <div className='list'>
        <h3>
          {title[2]}
          <span onClick = {goodUp}>3번👍</span>{good[2]}
        </h3>
        <p>2월 22일 발행</p>
        <hr/>
      </div>

      <Modal></Modal>
      {/* <Modal/> ==> 이렇게만 써도 동일하게 사용 가능 */}

    </div>
  );
}

// 모달창 Compomnent 만들기
function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;