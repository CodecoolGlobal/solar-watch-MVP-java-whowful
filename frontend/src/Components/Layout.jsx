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
    <>
      <header className="bg-gray-800 flex items-center justify-between p-2">
        <div className="inline-block">
          <a className="p-2 m-2 rounded-xl text-white hover:bg-gray-600" href="/">
            Home
          </a>
        </div>
        {!jwt ? (
          <nav>
            <div className="inline-block">
              <Link to="/login">
                <button className="p-2 m-2 rounded-xl text-white hover:bg-gray-600 border border-r-white">
                  Sign In
                </button>
              </Link>
            </div>
            <div className="inline-block">
              <Link to="/register">
                <button className="p-2 m-2 rounded-xl text-white hover:bg-gray-600 border border-r-white">
                  Register
                </button>
              </Link>
            </div>
          </nav>
        ) : (
          <nav className="inline-block">
            <Link to='/solarwatch'>
              <button className="p-2 m-2 rounded-xl text-white hover:bg-gray-600 border border-r-white">
                SolarWatch
              </button>
            </Link>
            <Link to="/">
              <button className="p-2 m-2 rounded-xl text-white hover:bg-gray-600 border border-r-white" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          </nav>
        )}
      </header>
      <main >
        {children}
      </main >
    </>

  )
}

export default Layout