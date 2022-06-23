import React, { useState } from 'react'
import ReactDOM  from 'react-dom'

const Greet = () => {

  const [text, setText] = useState('random title');
  const handleClick = () => {
    if (text === 'random title') {
      setText("h");
    } else {
      setText('random title');
    }
    };

    return (
      <React.Fragment>
        <h1>{text}</h1>
        <button type='button' className='btn'
          onClick={handleClick}
        >
          change title
        </button>
      </React.Fragment>
    );
  }

ReactDOM.render(<Greet/>,document.getElementById("root"))