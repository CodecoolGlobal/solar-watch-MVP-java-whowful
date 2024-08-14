import React from 'react'
import { Link } from 'react-router-dom'




const Layout = ({ children }) => {

  return (
    <div>
      <header>
        <nav >
          <div>
            <a href='/'>Home</a>
          </div>
          <div>
            <Link to="/login">
              <button>Sign In</button>
            </Link>
          </div>
          <div>
            <Link to="/register">
              <button >Register</button>
            </Link>
          </div>
        </nav>
      </header>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout