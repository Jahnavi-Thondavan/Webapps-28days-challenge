import { useEffect, useState } from 'react'
import Text from './text.jsx'
import './app.css'

const wordsList=[
  {word:"APPLE",description:"It is an fruit and red color one"},
  {word:"BANANA",description:"It is an fruit and yellow color one"},
  {word:"GRAPES",description:"It is an fruit and green color one"},
  {word:"MANGO",description:"It is an fruit and yellow color one"},
  {word:"ORANGE",description:"It is an fruit and orange color one"},
  {word:"PINEAPPLE",description:"It is an fruit and yellow color one with green leaves on top"},
]

function pickRandom(){
  return wordsList[Math.floor(Math.random()*wordsList.length)];
}

function App() {

  const [alpha,setAlpha]=useState([]);
  const [word,setWord]=useState(pickRandom());
  const [wrongConter,setWrongCounter]=useState(0);
  const [score,setScore]=useState(0);

  // useEffect(()=>{
  //   if(wrongConter>2){
  //     alert('Game Over');
  //     resetGame();
  //   }
  // },[wrongConter])

  useEffect(()=>{
    if(wrongConter>2){
      setScore(score-1);
      alert('Game Over');
      resetGame();
    }
  },[wrongConter]);

  const aphaList=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

  function clickAplhaButton(item){
    console.log('Button Clicked:', item);
    setAlpha([...alpha,item]);
  }

  function checkAns(){
    let ans=alpha.join('');//aplha=['A','P','P','L','E']=>APPLE
    if(ans==word.word){
      setScore(score+5);
      alert('Correct Answer');
      resetGame();
    }else{
      setScore(score-2);
      setWrongCounter(wrongConter+1);
      alert('Wrong Answer');
    }

  }

  function removeLast(){
    let newAlpha=[...alpha];
    newAlpha.pop();
    setAlpha(newAlpha);
  }

  function resetGame(){
    setAlpha([]);
    setWord(pickRandom());
  }

  //()=>{} annonymous function
  return (
    <>
      <div className='parentCon'>

  <h1 className="gameTitle">WORD GAME</h1>

  <h2 className="scoreText">Score: {score}</h2>

        <div className='inputDiv'>
          {
            alpha.map((item)=>{
              return <Text text={item}/>
            })
          }

          

        </div>

        <p>{word.description}</p>

        <div className='alphaList'>
          {/* <div className='alpha'>A</div>
          <div className='alpha'>B</div>
          <div className='alpha'>C</div> */}

          {
            aphaList.map((item)=>{
              return <div className='alpha' onClick={()=>clickAplhaButton(item)}>{item}</div>
            })
          }
        </div>

        <button onClick={removeLast}>Remove</button>

        <button className='subBtn' onClick={checkAns}>Submit</button>
      </div>
    </>
  )
}

export default App