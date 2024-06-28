import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Create(){

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();

   const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(
        "https://667bb5813c30891b86599972.mockapi.io/crudProject",
        {
            name:name,
            email:email,
        }

    ).then( navigate('/read'));
    setName("");
    setEmail(" ");
   }


    return(
      <>
      <div className="d-flex justify-content-between ">
        <h2>Create Your own Form</h2>
        <Link to='/read'>
        <button type="button" class="btn btn-info">Show All</button>
        </Link>
      </div>
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
  
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
</>
    )
}

export default Create;