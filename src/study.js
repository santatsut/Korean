import React, {useState} from "react";
import './study.css';

function Study() {
    const alpha = ["ㅂ", "ㅈ", "ㄷ", "ㄱ", 'ㅅ', 'ㅛ', 'ㅕ', 'ㅑ', 'ㅐ', 'ㅔ', 'ㅁ','ㄴ','ㅇ','ㄹ','ㅎ','ㅗ','ㅓ','ㅏ','ㅣ','ㅋ','ㅌ','ㅊ','ㅍ','ㅠ','ㅜ','ㅡ']
    const [answer, setAnswer] = useState('')
    const [theAnswer, setTheAnswer] = useState('')
    var aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
    const [num, setNum] = useState(aNumber)
    const [points, setPoints] = useState(0)  
    const [wrong, setWrong] = useState(0)

    document.onkeypress = function (e) {
        e = e || window.event;
        if (e.keyCode === 13) {

            if (num === 0) {
              setTheAnswer('b')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 1) {
              setTheAnswer('j')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 2) {
              setTheAnswer('d')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }


            else if (num === 3) {
              setTheAnswer('g')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 4) {
              setTheAnswer('s')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 5) {
              setTheAnswer('yo')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }

            else if (num === 6) {
              setTheAnswer('yeo')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 7) {
              setTheAnswer('ya')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 8) {
              setTheAnswer('ae')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }

            else if (num === 9) {
              setTheAnswer('e')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 10) {
              setTheAnswer('m')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 11) {
              setTheAnswer('n')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }

            else if (num === 12) {
              setTheAnswer('o')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 13) {
              setTheAnswer('r')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 14) {
              setTheAnswer('h')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }

            else if (num === 15) {
              setTheAnswer('o')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 16) {
              setTheAnswer('eo')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 17) {
              setTheAnswer('a')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }

            else if (num === 18) {
              setTheAnswer('i')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 19) {
              setTheAnswer('k')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 20) {
              setTheAnswer('t')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }



            else if (num === 21) {
              setTheAnswer('ch')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 22) {
              setTheAnswer('p')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
            }
            else if (num === 23) {
              setTheAnswer('yo')
              if (answer === theAnswer) {
                console.log('correct')
                console.log(answer, theAnswer)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
              }
            }

            else if (num === 24) {
              setTheAnswer('u')
              if (answer === theAnswer) {
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
                
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
              }
            }
            else if (num === 25) {
              setTheAnswer('eu')
              if (answer === theAnswer) {
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
                setTheAnswer('')
                setAnswer('')
                setPoints(points + 1)
                
              }
              else {
                setAnswer('')
                setWrong(wrong + 1)
                let aNumber = Math.floor(Math.random(0, 25) * (25 - 0) + 0)
                setNum(aNumber)
              }
            }
            
        }

        if (e.keyCode === 32) (
            console.log('the answer is' + {theAnswer})
        )
    };

    return (
      <div>
        <h1 className="word">{alpha[num]}</h1>
        <h2 className='corrects'>correct: {points} </h2>
        <h2 className='wrongs'>wrong: {wrong} </h2>

        <input 
        type="text" 
        className="answerField"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        >
        </input>
      </div>
    );
  }
  
  export default Study;
  