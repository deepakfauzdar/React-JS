import React, { useEffect, useState } from 'react'
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/FirebaseConfig';

function Update({id}) {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[fileUrl,setUrl]=useState(""); 
    
    const handleData=async()=>{
        try{
        console.log(id);
        const response=await getDoc(doc(db,'users',id))
        console.log(response.data());
        setName(response.data().name);
        setEmail(response.data().email);
        } catch(error){
            console.log(error);
        }
       }

    useEffect(() => {
      handleData(id);
      console.log(id);
    }, [id])
    

  return (
    <form class="w-50 mx-auto">
        <h2>Edit Form</h2>
  <div class="mb-3">
    <label for="exampleName" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleName" 
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" 
    // value={email}
    // onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Choose File</label>
    <input type="file" class="form-control" id="exampleInputEmail1" 
    // onChange={handleUpload}
    />
  </div>
  <button type="submit" class="btn btn-primary"
//   onClick={handleSubmit}
  >Submit</button>
</form>
  )
}

export default Update