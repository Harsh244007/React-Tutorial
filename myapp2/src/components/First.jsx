import React, { useState } from 'react'


export default function Hello() {
  var [counter, reCounter] = useState(6)
  var [text, hideText] = useState("rush")
  var [toggle,setToggle]=useState(true)
  function click() {
    reCounter(counter + 2)
    // console.log(counter)
  }
    function clickMinus() {
      if (counter > 1) {
        reCounter(counter - 2)
        // console.log(counter)
      }
    }
  function show() {
    setToggle(!toggle)
    // console.log(toggle)
      if(toggle) 
        hideText("harsh")
      else
      hideText("rush")
  
  }
  return (
    <>
<h1>{counter}</h1>
      <button onClick={click} >Click plus</button>
      
      <button onClick={clickMinus} >Click minus</button>
      <button onClick={show} >show Hide Text</button>
      <h1>{text}</h1>
      {toggle ? <img style={{ display: "block", borderRadius: "100px" }} src='https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI' />
:""      }
    </>
  )
}

// ReactDOM.render(<Hello></Hello>, document.getElementById("root"))


// Hook = special function React special
// Total 10 Hooks in React
// 3 basics
// useState
// useEffect
// useReducer

// useLayoutEffect


// Aaj hummne
// basic of React, folder structure, hooks
// useState