import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile(){
   const {user}=useContext(UserContext);

   if(user) {
    return (<div>Welcome {user.username} and his password is {user.password}</div>);
    
   }

   return (<div>Please Enter Credentials</div>)

   
}

export default Profile;