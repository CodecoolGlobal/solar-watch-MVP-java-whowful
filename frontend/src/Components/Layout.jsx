import React from 'react'



const Layout = ({ children }) => {

  return (
    <div>
      <header className='bg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justitfy-between'>
        <nav className=''>
          <div>
            <a href="">Home</a>
          </div>
          <div>
            <button className='bg-blue-200 tect-white px-5 py-2 round-full hover:bg-[#87acec]' >Sign In</button>
          </div>
          <div>
            <button className=''>Register</button>
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