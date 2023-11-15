import React from "react";
export default function UserDetails({userData}){
    return (
        <div className="card">
          <img src={userData.avatar_url} alt="User Avatar" className="avatar" />
          <div className="card-body">

          <h1><span>{userData.login}</span>
          </h1>
         
          <h3>{userData.name}</h3>
       
            <p>{userData.bio}</p> 
            <ul>
                <li><b>Location:</b>{userData.location}</li>
                <li><b>Created On:</b>{userData.created_at}</li></ul>   
            
           
          </div>
        </div>
      );
}