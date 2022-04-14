import React, {useEffect, useState} from "react";
import './study.css';
import { useNavigate } from 'react-router-dom';

function Study() {
    const alpha = ["ㅂ", "ㅈ", "ㄷ", "ㄱ", 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ','ㄴ','ㅇ','ㄹ','ㅎ','ㅗ','ㅓ','ㅏ','ㅣ','ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅜ','ㅡ']
    const answers = ['b', 'j', 'd', 'g', 's', 'yo', 'yeo', 'ya', 'ae', 'e', 'm', 'n', 'ng', 'l', 'h', 'o', 'eo', 'a', 'i', 'k', 't', 'ch', 'p', 'yu', 'u', 'eu']
    const [answer, setAnswer] = useState('')
    const [theAnswer, setTheAnswer] = useState(Math.floor(Math.random(0, 25) * (25 - 0) + 0))
    const [answerInput, setAnswerInput] = useState()
    const [points, setPoints] = useState(0)  
    const [shown, setShown] = useState(0)
    const [tries, setTries] = useState(0)

function getRandom() {
  setTheAnswer(Math.floor(Math.random(0, 25) * (25 - 0) + 0))
}

function getIndex() {
  return answers.indexOf(answer)
}

    document.onkeypress = function (e) {
        e = e || window.event;
        if (e.keyCode === 13) {

        if (getIndex() === theAnswer) {
          console.log('right')
          getRandom()
          setPoints(points + 1)
          setShown(shown + 1)
          setAnswer('')
        }
        else {
          setTries(tries + 1)
          
        }
        if (tries === 2) {
          getRandom()
          setShown(shown + 1)
          setAnswer('')
          setTries(0)
        }
      }
    };
    const navigate = useNavigate();
    return (
      <div>
        <h1 className="word">{alpha[theAnswer]}</h1>
        <h2 className='corrects'>correct: {points} </h2>
        <h2 className='wrongs'>shown: {shown} </h2>

        <input 
        type="text" 
        className="answerField"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        >
        </input>

        <button className="ListBtn" onClick={() => navigate('/ListOfCharacters')}>Show All</button>

      {tries === 1 ? <p className='reveal'>{answers[theAnswer]}</p> : null}

      </div>
    );
  }

  export default Study;