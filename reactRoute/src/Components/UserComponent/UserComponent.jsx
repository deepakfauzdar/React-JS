import React from "react";
import { useParams } from "react-router-dom";

function UserComponent(){

    const {userid}=useParams();
    // console.log(userID);
    return(
        <h1>User passed {userid}</h1>
    )
  
}

export default UserComponent