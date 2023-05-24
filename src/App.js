/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [subTitle,setSubTitle]= useState(0);
  let [inputValue,setInputValue]=useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      <button onClick={() => {
        let tmparray = [...title];
        tmparray = tmparray.sort();
        setTitle(tmparray);

      }}>가나다순정렬</button>

      {/* <div className="list">
        <h4>{title[0]} <span onClick={()=>{setLike(like+1)}}>🖤</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
        </div>
      <div className="list">
        <h4 onClick={()=>{ setModal(!modal)}}>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}


      {
        title.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setModal(!modal);
                setSubTitle(i);
              }}
              >{a}<span onClick={() => {
                let copy = [...like];
                copy[i] = copy[i] + 1;
                setLike(copy);
              }}>🖤</span> {like[i]} </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy=[...title];
                copy.splice(i,1);
                setTitle(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

     
      <input onChange={(e)=>{
        setInputValue(e.target.value);
      }}></input>
      <button onClick={()=>{
        let copy=[inputValue,...title];
        setTitle(copy);
      }}>글추가</button>

      {modal ? <Modal title={title}  subTitle={subTitle}/> : null}

    </div>
  );
}


function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.subTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      {/* <button onClick={() => {
        let copy = [...props.title];
        copy[0] = '여자 코트 추천';
        props.setTitle(copy);
      }}>글수정</button> */}
    </div>
  )
}

export default App;

