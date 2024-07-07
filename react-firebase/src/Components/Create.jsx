import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { db, storage } from '../firebase/FirebaseConfig';
import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { useNavigate, useParams , Link} from 'react-router-dom';

function Create() {
   const[name,setName]=useState("");
   const[email,setEmail]=useState("");
   const[fileUrl,setFileUrl]=useState("");  
   const [isLoading,setIsLoading]=useState(false);
   const [isEdit, setIsEdit]=useState(false);
   const navigate=useNavigate(); 
   const {id}=useParams();

   const handleUpload=async (e)=>{
    const file=e.target.files[0];
    //e.target.files gives you the fileList 
    // console.log(file);
    setIsLoading(true);
    
   try {
    const image=ref(storage,`images/${file.name}`);
    await uploadBytesResumable(image,file);
    const url=await getDownloadURL(image)
    console.log(url);
    setFileUrl(url);
   } catch (error) {
    console.log(error);
   }

   setIsLoading(false);
   }

   //handle submit data
   const handleSubmit=async(e)=>{
      e.preventDefault();
     const ref=collection(db, "users");
     try {
       await addDoc(ref,{
        _id:Date.now(),
        name:name,
        email:email,
        FileUrl:fileUrl,
        created:Timestamp.now()

       })
     } catch (error) {
      console.log(error);
     }
     navigate('read');
   }

//handling to check whether it is coming from edit or create component

useEffect( ()=>{
if(id){
  setIsEdit(true);
  fetchSingleData(id);
}else{
  setIsEdit(false);
  setName("");
  setEmail("");
  setFileUrl("");
}
}, [id])


//Code to prefil data to update Page

const fetchSingleData=async(id)=>{
   const snapshot=await getDoc(doc(db,'users',id))
   console.log(snapshot.data());
   setName(snapshot.data().name);
   setEmail(snapshot.data().email);
   setFileUrl(snapshot.data().FileUrl);
}

//Code to update the data by clicking on update Button

const handleUpdate=async(e)=>{
  e.preventDefault();
    try
    {
      await updateDoc(doc(db, 'users',id),{
        name:name,
        email:email,
        FileUrl:fileUrl
      })
    }catch(error){
      console.log(error);
    }
    navigate('/read');
}


  return (
    <form class="w-50 mx-auto">      
     {isLoading && <div class="alert alert-danger" role="alert">
  Wait!!File is uploading on the server
</div>}
 {isEdit?<h2>Edit Your Form</h2>:<h2>Create Your Form</h2>}
  <div class="mb-3">
    <label for="exampleName" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleName" 
    value={name}
    onChange={(e)=>setName(e.target.value)}
    />
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    />
  </div>
  {fileUrl && <img src={fileUrl} alt={name}  width={150}/>}
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Choose File</label>
    <input type="file" class="form-control" id="exampleInputEmail1" 
    // value={fileUrl}
    onChange={handleUpload}
    />
  </div>
  {isEdit ?
  <div>
  <button type="submit" class="btn btn-primary"
  onClick={handleUpdate}
  >Update</button>
  <Link to="/">
  <button type="button" class="btn btn-primary mx-2"
  >Create</button>
  </Link>
  </div>
  :
  <button type="submit" class="btn btn-primary"
  onClick={handleSubmit}
  >Submit</button>}
</form>
  )
}

export default Create