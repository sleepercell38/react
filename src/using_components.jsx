 /*components help in breaking the webpage into several small reusable components which we can easily import to the main app.jsx whenever we want
  steps to do so are 
  1- create a component folder under the src folder 
  2- and create the components file with extenstion of .jsx and
  3- always REMEMBER TO USE CAPITAL LETTER AT THE STARTING OF THE NAME OF THE FILE 
   */




import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const using_components = () => {
  return (
    <>
     <Navbar/>
     <Footer/>
    </>
  )
}

export default using_components
