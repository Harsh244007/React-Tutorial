
import React,{useReducer,useState} from 'react'
const reducer = (state,action) => {
    switch(action.types){
        case "INC":
            return {
            ...state,
            count:state.count+1
            }
        case "SHOW":
            return {
            ...state,
                tex: !state.tex,
            tex2:!state.tex2
            }
        default:
            return state;
    }
}
const Third = () => {
// const [Text, setTex] = useState(true)
// const [Counter, setCounter] = useState(0)
    const [state,dispatch]=useReducer(reducer,{count:24,tex:false,tex2:false})
  return (
      <div>
          <h1>{state.count}</h1>
          <button onClick={() => {
              dispatch({types:"INC"})
              dispatch({types:"SHOW"})
          }
          }
          >Plus</button>
          {state.tex ? <h2>Harsh</h2> : ""}
          {state.tex2?<h2>Vikash</h2>:""}
    </div>
  )
}

export default Third