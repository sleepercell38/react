 /*components help in breaking the webpage into several small reusable components which we can easily import to the main app.jsx whenever we want
  steps to do so are 
  1- create a component folder under the src folder 
  2- and create the components file with extenstion of .jsx and
  3- always REMEMBER TO USE CAPITAL LETTER AT THE STARTING OF THE NAME OF THE FILE 
   */




import React from 'react'
import Card from './components/Card'



const using_components = () => {

  const data=[
    {
      "name": "Alice Smith",
      "place": "Los Angeles",
      "age": 28,
      "profession": "Graphic Designer"
    },
    {
      "name": "Michael Johnson",
      "place": "Chicago",
      "age": 35,
      "profession": "Data Analyst"
    },
    {
      "name": "Sophia Lee",
      "place": "San Francisco",
      "age": 26,
      "profession": "Frontend Developer"
    },
    {
      "name": "David Brown",
      "place": "Houston",
      "age": 40,
      "profession": "Project Manager"
    },
    {
      "name": "Emma Wilson",
      "place": "Seattle",
      "age": 22,
      "profession": "UI/UX Designer"
    }
  ]


  return (
    
    <div className='flex flex-wrap justify-center mt-10 gap-20 m-10'>
      {data.map((elem)=>{
         return <Card username={elem.name}  age= {elem.age} work = {elem.profession}/>;
      })}
       
    
    </div>
    
  )
}

export default using_components
