import { useState } from "react";

export default function Input() {
  const [name, setName] = useState("iii");
function changeInput(e)
{
    setName(e.target.value );
}
  return (
    <div className="form-group">
      <label htmlFor="name">Name:</label>

      <input id="name" type="text" placeholder="Enter your name" value={name} onChange={changeInput}/>
      <h3>{name}</h3>
    </div>
  );
}
