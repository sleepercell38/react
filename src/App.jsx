import { useState } from "react";

function app(){
    

  
    const [a, seta]=useState(10)



     function abc(){
      seta(a+1)
     }
     function efg(){
      seta(a-1)
     }


  return <div className="flex flex-col gap-2 p-4 justify-center items-center">
    <h1 className="font-black  font-mono  text-4xl" > THE NUMBER IS {a}</h1>
    <button onClick={abc} className="bg-green-500 p-4 rounded xl"> INCREMENT</button>
    <br /> 
    <button onClick={efg} className="bg-green-500 p-4 rounded xl"> DECREMENT</button>
  </div>


}


export default app;


// what are react hooks- 