import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Read(){

   const [data, setData]=useState([]);
   const [toggle,setToggle]=useState("");
   function getData(){
      axios.get("https://667bb5813c30891b86599972.mockapi.io/crudProject")
      .then( (res)=>setData(res.data))
   }

   useEffect(()=>{
     getData();
   },[])

   const handleDelete=(id)=>{
      axios.delete(`https://667bb5813c30891b86599972.mockapi.io/crudProject/${id}`)
      .then( ()=>{
        getData()
   })
   }

   const setToLocalStorage=(id, name, email)=>{
     localStorage.setItem('id',id);
     localStorage.setItem('name',name);
     localStorage.setItem('email',email);          
   }

 return(
    <>
    <div className="d-flex justify-content-between">
    <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" 
  value={toggle}
  onClick={(e)=>{
    if(e.target.value===""){
      setToggle("table-dark")
    }else{
      setToggle("")
    }
  }}/>
</div>
  <Link to='/'>
    <button type="button" class="btn btn-info center my-4" >Create</button>
    </Link>
    </div>
    <table className={`table ${toggle}`}>
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   {   
     data.map( (item)=>(
     <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>
      <Link to='/edit'>
      <button type="button" class="btn btn-success" 
      onClick={()=>{
        setToLocalStorage(item.id,item.name,item.email)
      }}
      >Edit</button>
      </Link>     
      </td> 
      <td><button type="button" class="btn btn-danger" 
      onClick={()=>handleDelete(item.id)}
      >Delete</button></td>
    </tr>
   ))}
  </tbody> 
</table> 
     </>     
 )
}

export default Read;