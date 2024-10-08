import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center text-sky-600 w-auto bg-indigo-950' >
      <div>
        <h1 className=' flex justify-around items-center   font-mono text-4xl font-extrabold'>REACT.JS</h1>
      </div>
      <div className='flex  text-xl justify-center items-center gap-10 font-extrabold '>
         <h3>learn</h3>
         <h3>reference</h3>
         <h3>community</h3>

      </div>
    </div>
  )
}

export default Navbar
