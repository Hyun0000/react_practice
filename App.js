import React, {useState} from 'react';
import './App.css';

function App() {
// -------------------------- 변수 및 state 선언 부분 --------------------------
  // 글제목
  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '잔망루피 짱']);  

  // 따봉(좋아요)
  let [good, goodChange] = useState([0,1,2]);

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

      <button onClick={() => {modalShow(true)}}>모달창 only 열기 버튼</button>
      <br/>
      <button onClick={modalFunc}>모달 토글 버튼</button>
      {/* 강사 코드 : 함수를 따로 만들 필요도 없고 훨씬 더 코드가 간단하다. */}
      {/* <button onClick={() => {modalShow(!modal);}}>모달창 only 열기 버튼</button> */}

        {
          modal ? <Modal></Modal> : null
          // null 뒤에 세미콜론(;) 쓰면 Error 발생

          // {modal} ? <Modal></Modal> : null
          // modal state에 {중괄호}를 씌우면 기능 작동이 안된다.
          // 아마 이곳을 JS 영역으로 인식해서 {중괄호}가 없어도 되는것 같다.
        }

        {/* 
          - <Modal/> 같은건 일종의 JS 표현식, 자료형이라고 생각하면 된다.
          - 그렇기에 <Modal>을 if 문안에 집어넣을 수 있는 것이다.
          - 하지만 {중괄호}안에서는 if 문을 사용할 수 없기때문에 대신 삼항연산자를 사용하는 것이다.
          - JSX의 {중괄호}안에서는 변수명, 함수명등은 인식할 수 있지만 if 문은 인식을 못하는 것이다.
          (그래서 if 대신에 삼항연산자를 사용)

          * return(...) 부분 안에서 JS를 쓰고 싶으면 {중괄호}를 치고 그 안에 JS 코드를 작성하면 된다.
        */}

        {/* JS 코드 사용 예시 */}
        {/* 쉼표를 붙이니까 여러개의 JS 코드를 사용할 수 있었다.(내가 직접 발견) */}
        {
          console.log(1),
          console.log(2),
          console.log(3),
          console.log(4),
          console.log(5)
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