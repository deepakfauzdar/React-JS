import { collection, deleteDoc, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase/FirebaseConfig';
import { Link } from 'react-router-dom';
import Update from './Update';


function Read() {

  const [userData, setUserData]=useState([]);
  const [isLoading,setIsLoading]=useState(false);

 const fetch=async ()=>{
    const snapshot=await getDocs(collection(db,"users"))
    // console.log(snapshot.docs);
    const user_data=snapshot.docs.map( (item)=>{
      // console.log(item.data());
      return  {...item.data(), id:item.id};
    })
   console.log(user_data);
  setUserData(user_data);
   }
   
   
   useEffect(() => {
     fetch();
   }, [])

   const handleDelete=async(id)=>{
    setIsLoading(true);
      try {
        console.log(id);       
        await deleteDoc(doc(db,'users',id));
         fetch();
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
   }
  return (
    <div class="container">
    <div class="row">
    {isLoading && <div class="alert alert-danger" role="alert">
  Wait!!File is being deleted from server
</div>}
      { userData && userData.map( (item)=>(
      <div class="col-4">
      <div class="card">
  <img src={item.FileUrl} class="rounded" height="200px"/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.email}</p>
    <Link to={`/edit/${item.id}`}>
    <button type="button" class="btn btn-success mx-2">Edit</button>
    </Link>
    <button type="button" class="btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button>
  </div>
</div>
      </div>))}
    </div>
  </div>
  )
}

export default Read