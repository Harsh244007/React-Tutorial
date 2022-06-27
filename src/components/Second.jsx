import React, { useEffect,useLayoutEffect,useState } from 'react'
import axios from 'axios'

// const Second = () => {
// }
// axios
// get
// put
// patch
// delete
const Second=()=> {
  
  const [tri, setTri] = useState(true)
  const [tri2, setTri2] = useState(true)
  const [tex,setTex] = useState("")
  useEffect(() => {
    axios.get("http://localhost:8080/candidates").
      then(function (r) {
        // console.log(r.data)
      setTex(r.data[0].name)}).
      catch((e) => console.log(e.code))
    // console.log("harsh")
  },[])
  
  function fetch() {
    setTri(!tri)
  }
  function fetcha() {
    setTri2(!tri2)
  }
    return (
      <div>Second
        <br/>
        <button onClick={fetch}>click to fetch</button>
        {tri ? <h1>hel1</h1> : ""} 
        <button onClick={fetcha}>click to fetch</button>
      {tri2?<h2>hel2{tex}</h2>:""}
    </div>
  )
}

export default Second