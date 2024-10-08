import { useState } from "react";

function app(){
    

  
    const [a, seta]=useState(10)



     function abc(){
      seta(a+1)
     }
     function efg(){
      seta(a-1)
     }


  return <div>
    <h1> THE NUMBER IS {a}</h1>
    <button onClick={abc}> INCREMENT</button>
    <br /> <br />
    <button onClick={efg}> DECREMENT</button>
  </div>


}


export default app;


// what are react hooks- 