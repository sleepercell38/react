

const Card = (prop) => {
    

  return (
    <div>
         
            <div className="flex  text-black flex-col bg-slate-100 p-10 font-black text-lg rounded shadow-blue-500/40">
            <h3><span className="text-black">NAME</span>:   {prop.username}</h3> 
            <h4><span className="text-black">AGE</span>  :{prop.age}</h4> 
            <h4><span className="text-black">PROFFESION</span>:{prop.work}</h4> 
            <br />
            <button className="bg-blue-400 rounded-3xl">ADD FRIEND</button>
            
            </div> 

    
    </div>
  )
}

export default Card
