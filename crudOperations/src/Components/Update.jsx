import React from "react";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Update(){
  const [id,setId]=useState(0);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");

  const navigate=useNavigate();

  const fun=()=>{
    console.log(`user entered info is ${name} and email is ${email}`)
  }

  useEffect(() => {
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
  }, [])
  
  const handleUpdate=(e)=>{
  e.preventDefault();
  axios.put(`https://667bb5813c30891b86599972.mockapi.io/crudProject/${id}`,
    {
      name:name,
      email:email
    }
  ).then( ()=>{
    navigate('/read');
  })
  }

    return(
        <>
        <h2>Edit Form</h2>
        <form>
    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name </label> {"  "}
    <input type="text"  
    value={name}
    onChange={(e)=>setName(e.target.value)}
     />
    </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email </label> {"   "}
    <input type="email" 
    value={email} 
    onChange={(e)=>setEmail(e.target.value)}
    />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  
  <button type="submit" className="btn btn-primary" 
  onClick={handleUpdate}
  >
update</button>

<button type="submit" className="btn btn-primary mx-4" onClick={()=>navigate('/read')}>Back</button>
</form>
        </>
    )
}


export default Update;