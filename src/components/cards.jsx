import React,{useState} from "react";
import SearchBar from "./searchbar";
import Loader from "./loader";
import UserDetails from "./UserDetails";
export default function FetchingData(){
    const[username,setUsername]=useState("");
    const[userData,setUserData]=useState(null);
    
    const response=()=>{ fetch(`https://api.github.com/users/${username}`).then((response)=>response.json()).then((data)=>setUserData(data)).catch((error)=>console.error("api didn't fetch"))};
 return(<>
 <SearchBar setUsername={setUsername}/>
 <UserDetails userData={setUserData} /></>);
}