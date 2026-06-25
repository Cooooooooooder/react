import { useState } from "react"; 

export default function Button() {
  const [name, setName] = useState("Ahmed");

  function buttonClicked() {
    
    setName("Mohammed");
   
  }

  return (
    <div>
      <button className="tag" onClick={buttonClicked} >
        Click Me
      </button>

      <h2>{name}</h2>
    </div>
  );
}