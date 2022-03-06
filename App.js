import React, {useState} from 'react';
import './App.css';

function App() {
// -------------------------- 변수 및 state 선언 부분 --------------------------
  // 글제목
  let [title, titleChange] = useState(['남자 코트 추천', '강남 우동 맛집', '잔망루피 짱']);

  // 날짜
  let [postDate, postDateChange] = useState(['2월 20일 발행', '2월 21일 발행', '2월 22일 발행']);

  // 따봉(좋아요)
  let [good, goodChange] = useState([0,2,4]);

  // 모달창 보여줌/안보여줌
  let [modal, modalShow] = useState(false);

  // 글제목 OR <button>을 눌렀을 때 몇 번째 순서의 글제목을 눌렀는지에 대한 state 변수
  let [clickNum, clickNumChange] = useState(0);
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
// -------------------------- return 부분 -----------------------------------
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <button onClick={changeTitle}>제목 변경</button>
      <br/>
      <button onClick={sortArr}>글 정렬</button>
      <br/>
      <button onClick={() => {modalShow(!modal)}}>모달 토글 버튼</button>

      {
        title.map(function(titleEle, index) {
          return (
              <div className='list'>
                <h3 onClick={() => {clickNumChange(index); modalShow(!modal);}}>
                  {titleEle}
                  <span onClick = {goodUp}> 👍 </span> {good[index]}
                  <br/>
                </h3>
                <p>{postDate[index]}</p>
                <hr/>
              </div>
            )
        })
      }

      {/*
        버튼을 만든후 모달창의 글제목을 변경할 때

        <button onClick={()=>{clickNumChange(0); modalShow(!modal);}}>버튼1</button>
        <br/>
        <button onClick={()=>{clickNumChange(1); modalShow(!modal);}}>버튼2</button>
        <br/>
        <button onClick={()=>{clickNumChange(2); modalShow(!modal);}}>버튼3</button>
        <br/>
      */}

      

      {
        modal
        ? <Modal title={title} postDate={postDate} clickNum={clickNum}></Modal>
        : null
      }

    </div>
  );
}

// 모달창 Compomnent 만들기
function Modal(props) {
  return (
    <div className="modal">
      <h3>{props.title[props.clickNum]}</h3>
      <p>{props.postDate[props.clickNum]}</p>
      <p>상세내용 {props.clickNum + 1}</p>
    </div>
  );
}

export default App;