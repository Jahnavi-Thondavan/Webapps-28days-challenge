import { useState } from "react"
import './calculatorComp.css'

function CalculatorComp() {

  const [prevDis, setPrevDis] = useState([]);
  const [currentDis, setCurrentDis] = useState([]);

  function clickBtn(val) {

    if (val === "C") {
      setPrevDis([]);
      setCurrentDis([]);

    } else if (val === "CE") {
      setCurrentDis([]);

    } else if (val === "+/-") {
      if (currentDis.length > 0) {
        if (currentDis[0] === "-") {
          setCurrentDis(currentDis.slice(1));
        } else {
          setCurrentDis(["-", ...currentDis]);
        }
      }

    } else if (val === "=") {

      let prev = prevDis.slice(0, prevDis.length - 1).join("");
      let operator = prevDis[prevDis.length - 1];
      let cur = currentDis.join("");

      let result = 0;

      if (operator === "+") {
        result = Number(prev) + Number(cur);
      } else if (operator === "-") {
        result = Number(prev) - Number(cur);
      } else if (operator === "X") {
        result = Number(prev) * Number(cur);
      } else if (operator === "/") {
        result = Number(prev) / Number(cur);
      }

      setCurrentDis(result.toString().split(""));
      setPrevDis([]);

    } else if (val === "+" || val === "-" || val === "/" || val === "X") {

      if (currentDis.length === 0) return;

      setPrevDis([...currentDis, val]);
      setCurrentDis([]);

    } else {
      setCurrentDis([...currentDis, val]);
    }
  }

  return (
    <div className='con'>
      <div className='displayCon'>
        <div className='prevDis'>{prevDis.join("")}</div>
        <div className='currentDis'>{currentDis.join("")}</div>
      </div>

      <div className='button'>

        <div className='btn' onClick={() => clickBtn("C")}>C</div>
        <div className='btn' onClick={() => clickBtn("+/-")}>+/-</div>
        <div className='btn' onClick={() => clickBtn("CE")}>CE</div>
        <div className='btn' onClick={() => clickBtn("/")}>/</div>

        <div className='btn' onClick={() => clickBtn("7")}>7</div>
        <div className='btn' onClick={() => clickBtn("8")}>8</div>
        <div className='btn' onClick={() => clickBtn("9")}>9</div>
        <div className='btn' onClick={() => clickBtn("X")}>X</div>

        <div className='btn' onClick={() => clickBtn("4")}>4</div>
        <div className='btn' onClick={() => clickBtn("5")}>5</div>
        <div className='btn' onClick={() => clickBtn("6")}>6</div>
        <div className='btn' onClick={() => clickBtn("-")}>-</div>

        <div className='btn' onClick={() => clickBtn("1")}>1</div>
        <div className='btn' onClick={() => clickBtn("2")}>2</div>
        <div className='btn' onClick={() => clickBtn("3")}>3</div>
        <div className='btn' onClick={() => clickBtn("+")}>+</div>

        <div className='btn zero-btn' onClick={() => clickBtn("0")}>0</div>
        <div className='btn' onClick={() => clickBtn(".")}>.</div>
        <div className='btn equal-btn' onClick={() => clickBtn("=")}>=</div>

      </div>
    </div>
  )
}

export default CalculatorComp;