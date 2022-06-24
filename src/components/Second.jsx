import React, { useEffect,useState } from 'react'
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
  useEffect(() => {
    axios.get("http://localhost:8080/candidates").
then(function (r) { console.log(r.data) }).
      catch((e) => console.log(e.code))
  }
    ,[tri])
  
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
      {tri2?<h1>hel2</h1>:""}
    </div>
  )
}

export default Second