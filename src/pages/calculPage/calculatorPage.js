import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { PlusNumbers, subtractNumbers, multiplyNumbers, divideNumbers, cleanInputs, cleanResult } from "../../store/calculSlice"


function CalculPage() {
  const dispatch = useDispatch()
  const [input1, setInput1] = useState("")
  const [input2, setInput2] = useState("")

  const { result } = useSelector(state => state.calculSlice)

  const doAction = (event) => {
    if (input1 !== "" && input2 !== "") {
      switch (event.target.innerText) {
        case "+":
          dispatch(PlusNumbers({ input1, input2 }))
          break;
        case "-":
          dispatch(subtractNumbers({ input1, input2 }))
          break;
        case "*":
          dispatch(multiplyNumbers({ input1, input2 }))
          break;
        case "/":
          dispatch(divideNumbers({ input1, input2 }))
          break;
        case "cls":
          setInput1("")
          setInput2("")
          dispatch(cleanResult())
          break;
        default:
          break;
      }
    } else {
      alert("Заполните все поля!")
    }
  }





  return (
    <div className="container">
      <h1>math calculator</h1>
      <div className="calculator">
        <div className="inputs">
          <input type="number" placeholder="enter first number" value={input1} onChange={(event) => setInput1(event.target.value)} />
          <input type="number" placeholder="enter second number" value={input2} onChange={(event) => setInput2(event.target.value)} />
        </div>

        <div className="buttons">
          <button onClick={doAction}>+</button>
          <button onClick={doAction}>-</button>
          <button onClick={doAction}>*</button>
          <button onClick={doAction}>/</button>
          <button onClick={doAction}>cls</button>
        </div>
      </div>
      <p>answer: {result}</p>
    </div>
  )
}

export default CalculPage;