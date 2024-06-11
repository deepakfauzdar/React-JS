import React from "react";
import { useEffect , useState} from "react";

function Github(){
    const [data, setData]=useState("")
    useEffect( ()=>{
        fetch("https://api.github.com/users/deepakfauzdar")
        .then( (res)=>res.json())
        .then( (data)=>{
            console.log(data);
            setData(data);
        }) 
    },[])
    return(
        <div className="text-white bg-black text-2xl py-6">
        Github Account : {data.name} 
        </div>
    )
}

export default Github