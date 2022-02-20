import './App.css';

// 이미지 import 하는 방법
import logo from './wendy.jfif';

function App() {
  const fontStyle = 
  {
    color : 'green',
    fontSize : '30px'
  }

  const imgSize = 
  {
    width : '300px',
    heigth : '500px'
  }
  
  var data = 'Hello World!';
  let post = "강남 고기 맛집"

  function func1() {
    return 100;
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
        <div>{data}</div>
      </div>

      <h4>{post} TOP {func1()}</h4>
      <h4>{func1()}</h4>

      <img src={logo} alt="123" style={imgSize}></img>

      <div style={{color : 'blue', fontSize : '30px'}}> 글씨 </div>
      <div style={fontStyle}> 글씨 </div>
    </div>
  );
}

export default App;