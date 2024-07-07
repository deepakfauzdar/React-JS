import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid d-flex justify-content-between">
    <div class="collapse navbar-collapse ">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
       <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to='/read'>Show</NavLink>
            </li>
        </ul>     
    </div>
  </div>
</nav>
  )
}

export default Navbar