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

  // <input>을 통해 들어오는 사용자 입력값
  let [inputValue, inputValueChange] = useState("");
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

  // 글제목 추가 함수
  function plusPost() {
    // 원본 state는 불변해야하므로 title state에 대한 새로운 array deep copy 본 생성
    let newTitleArr = [...title];

    // unshift : 배열의 맨 앞에(index = 0) 새로운 요소를 추가해주는 함수
    newTitleArr.unshift(inputValue);

    //  새로운 title state로 변경
    titleChange(newTitleArr);
  }
// -------------------------- return 부분 -----------------------------------
  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>

      <Profile/>

      <br/><br/><br/><br/>
      <button onClick={changeTitle}>제목 변경</button>
      <br/>
      <button onClick={sortArr}>글 정렬</button>
      <br/>
      <button onClick={() => {modalShow(!modal)}}>모달 토글 버튼</button>

      {
        title.map(function(titleEle, index) {
          return (
              <div className='list' key={index}>
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

      {
        modal
        ? <Modal title={title} postDate={postDate} clickNum={clickNum}></Modal>
        : null
      }

    <div className="publish">
        <input onChange={(e) => {inputValueChange(e.target.value);}}/>
        <button onClick={plusPost}>저장</button>
    </div>

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

// 옛날 방식으로 Compomnent 만들기
class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name : 'Kim', age : 30 }
    this.fruit = "apple"; // 일반 변수 생성
  }

  // function이라는 키워드는 없어야한다. 있으면 error 난다.
  changeName = () => {
    // arrow function의 특징으로인해 상위의 this 값을 그대로 물려받는다.
    this.state.name === "Kim"
    ? this.setState( {name : 'Park'} )
    : this.setState( {name : 'Kim'} )
  }

  render() {
    return(
      // 원하는 JSX 작성
      <div>
        <h1>프로필영역</h1>
        <h3>저는 {this.state.name} 입니다.</h3>
        <h3>제 나이는 {this.state.age}살 입니다.</h3>
        <h3>제가 좋아하는 과일은 {this.fruit}입니다.</h3> {/* 일반 변수 사용 */}
        <button onClick={ this.changeName }>이름바꾸기 버튼</button>
      </div>
    )
  }
}

export default App;