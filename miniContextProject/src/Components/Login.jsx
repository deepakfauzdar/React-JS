import React from "react";
import {useState, useContext} from "react"
import UserContext from "../Context/UserContext";

function Login(){
 const [username,setUsername]=useState("");
 const [password,setPassword]=useState("");

 const {setUser}=useContext(UserContext);

 function usernameChanged(e){
    setUsername(e.target.value);
 }

 function passwordChanged(e){
    setPassword(e.target.value);
 }

 function handleSubmit(e){
    e.preventDefault();
    setUser({username,password})
 }

 return(
    <div>
        <input type="text" 
        value={username}
        placeholder="Enter username"
        onChange={usernameChanged}
        />
        {" "}
        <input type="password" 
         value={password}
         placeholder="Enter password"
         onChange={passwordChanged} 
         />
         <button onClick={handleSubmit}>Submit</button>
    </div>
 )
}
export default Login;
