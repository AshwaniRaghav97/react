
function Card(props){
  
  return (
    <>
    
    <h1 className="card">
      <img className="imge" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTsRsaLC-8Esp4q8R2GuyfcFe50j1vfmYjAL6RS7OTg&s=10" alt="Card Image" />
      Hii I am a Card {props.user} - Age: {props.age}</h1>

      
    </>
  )
}

export default Card