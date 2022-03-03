import React, {useState} from 'react';
import './App.css';

function App() {
// -------------------------- 변수 및 state 선언 부분 --------------------------
  // 글제목
  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '잔망루피 짱']);

  // 따봉(좋아요)
  let [good, goodChange] = useState([0,2,4]);

  // 모달창 보여줌/안보여줌
  let [modal, modalShow] = useState(false);
// -------------------------- 함수 선언 부분 -----------------------------------
  // 글제목 변경 함수
  function changeTitle() {
    let newTitlesArr = [...title];
    // 수정을 위해 state 변경함수에 집어넣을 data를 만들자
    // 단, spread operator를 이용해 배열의 deep copy를 해야한다.
    // 값 공유를 하면 안 된다.(원본 state는 수정되면 안 된다.)

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

  // 글제목 정렬 함수
  function sortArr() {
    let newTitlesArr2 = [...title];
    titleChange(newTitlesArr2.sort());
  }

  // 각 글의 따봉 +1 함수
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

  // 모달 show 관리 함수
  function modalFunc() {
    // 내가 짠 코드, 딱 기본적인 코드이다.
    if(modal === true) { modalShow(false); }
    else { modalShow(true); }
  }

// -------------------------- return 부분 -----------------------------------
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button onClick={changeTitle}>제목 변경</button>
      <br/>
      <button onClick={sortArr}>글 정렬</button>

      {
        title.map(function(title, index) {
          return (
              <div className='list'>
                <h3>
                  {title}
                  <span onClick = {goodUp}> {index + 1}번글 👍 </span> {good[index]}
                </h3>
                <p>2월 2{index}일 발행</p>
                <hr/>
              </div>
            )
        })
      }

      <button onClick={() => {modalShow(true)}}>모달창 only 열기 버튼</button>
      <br/>
      <button onClick={modalFunc}>모달 토글 버튼</button>

      {
        modal ? <Modal></Modal> : null
      }

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