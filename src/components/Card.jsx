

const Card = (props) => {
    

  return (
    <div>
         
            <div className="flex  text-black flex-col bg-slate-100 p-10 font-black text-lg rounded shadow-blue-500/40">
           
                 <h1>AUTHOR OF THE BOOK-{props.author}</h1>
                 <img className="h-80" src={props.download_url} />
   
            
            </div> 

    
    </div>
  )
}

export default Card
