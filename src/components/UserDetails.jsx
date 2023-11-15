import React from "react";
export default function UserDetails({userData}){
    return (
        <div className="card">
          <div className="profileDisp"><img src={userData.avatar_url} alt="User Avatar" className="avatar" />
          <a href={userData.html_url}><button className="viewProfile">View Profile</button></a></div>
          <div className="card-body">

          <h1><span>{userData.login}</span>
          </h1>
         
          <h3>{userData.name}</h3>
       
            <p>{userData.bio}</p> 
            <ul>
                <li><b>Location:</b>{userData.location}</li>
                <li><b>Created On:</b>{userData.created_at}</li></ul>   
           <div className="elementContainer"> <div className="elements">
              
              <button className="userElement"><b> Followers:</b> {userData.followers} 
               </button>
             </div>
            <div className="elementContainer"> <div className="elements">
              
             <button className="userElement"> <b> Following:</b> {userData.following} 
              </button>
             </div>
             <div className="elements">
              
              <button className="userElement"><b> Repos:</b> {userData.public_repos} 
               </button>
             </div>
             <div className="elements">
              
            <button className="userElement">  <b>Public Gists:</b> {userData.public_gists} 
              </button>
             </div></div></div>
          </div>
        </div>
      );
}