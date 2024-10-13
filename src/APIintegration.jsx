import axios from 'axios'
import React, { useState } from 'react'
import Card from './components/Card'

const APIintegration = () => {

    const[data,setdata]=useState([])

   const getdata= async()=>{
    const response=  await axios.get ("https://picsum.photos/v2/list?page=2&limit=10")
           await setdata(response.data)
            
   }
  return (
    <div>
      <button onClick={getdata} className='bg-blue-400 p-5 m-20'> GET DATA </button>
         <div className='flex flex-wrap justify-center mt-10 gap-20 m-10'> 
            {data.map((elem,idx)=>{
                console.log(elem.url)
                return <div>
                   <Card author={elem.author} download_url={elem.download_url}/>
                </div>
            })}
         </div>

    </div>
  )
}

export default APIintegration
