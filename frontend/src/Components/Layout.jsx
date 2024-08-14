import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




const Layout = ({ children, jwt, jwtSetter }) => {

  useEffect(() => {
    const storedJwt = localStorage.getItem('token');
    if (storedJwt) {
      jwtSetter(storedJwt);
    }
  }, [jwt]);

  const handleLogout = () => {
    localStorage.clear()
    jwtSetter('')
  }

  return (
    <div>
      <header>
        <nav>
          <div>
            <a href="/">Home</a>
          </div>
          {!jwt ? <>
            <div>
              <Link to="/login">
                <button>Sign In</button>
              </Link>
            </div>
            <div>
              <Link to="/register">
                <button>Register</button>
              </Link>
            </div>
          </> : <>
            <div>
              <Link to="/">
                <button onClick={handleLogout}>Logout</button>
              </Link>
            </div>
          </>}
        </nav>
      </header>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout