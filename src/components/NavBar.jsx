import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
      <div>
          <Link to="/">
              <button>Home</button>
          </Link>
          
          <Link to="/first">
              <button>Counter show/hide</button>
          </Link>
          <Link to="/second">
              <button>UseEffect Axios</button>
          </Link>
</div>
  )
}

export default NavBar