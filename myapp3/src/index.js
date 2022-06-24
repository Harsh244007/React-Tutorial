import ReactDOM from 'react-dom/client'
import {useState} from 'react'
const data = [
  {
    id: 1,
    name: "Chintu ",
    email: "p@gmail.com",
    phone: "8141217888",
    img: "https://media.istockphoto.com/photos/young-beautiful-woman-holding-a-bouquet-of-flowers-picture-id1357538784",
  },
  {
    id: 2,
    name: "Harsh",
    email: "h@gmail.com",
    phone: "8165555353",
    img: "https://media.istockphoto.com/photos/attractive-girl-with-brown-hair-walks-out-of-corporate-building-for-picture-id1349414698",
  }]
  console.log(data[0].img)
var Second = () => {
  function onc() {
    b(a + 1)
}
  function min() {
    if (a > 0) {
      b(a - 1)
    }
  }
  function image() {
 setToggle(!toggle)
  }
  var [toggle,setToggle]=useState(true)
var [a, b] = useState(10)
  return (
    <>
      {a}
      <br/>
      <button onClick={onc}>plus</button>
      <button onClick={min}>minus</button>
      <br />
      <h1>{toggle}</h1>
      {toggle ?
        <h1>{data[0].phone}</h1>
        :
        ""}
      <br/>
      <button onClick={image}>Show/hide</button>
  </>
  )
}

 ReactDOM.createRoot(document.getElementById("root")).render(<Second/>)
