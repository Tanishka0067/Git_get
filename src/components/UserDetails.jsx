import React, { useState, useEffect } from "react";
import FollowerList from "./Followers"; 
import StarredRepos from "./starredrepo";
import OrganizationsList from "./organisations";
export default function UserDetails({ userData, mostUsedLanguage, followers ,starredRepos,organizations}) {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showorgs, setShoworgs] = useState(false);
  const [showStrrepo, setStrrepo] = useState(false);
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  return (
    <div className="card">
      <div className="profileDisp">
        <img src={userData.avatar_url} alt="User Avatar" className="avatar" />
        <div className="profileButtons">
          <a href={userData.html_url}>
            <button className="viewProfile">View Profile</button>
          </a>
          <a href={`https://twitter.com/${userData.twitter_username}`}>
            <button className="twitter">Twitter</button>
          </a>
        </div>
      </div>
      <div className="card-body">
        <h1>
          <span>{userData.login}</span>
        </h1>

        <h3>{userData.name}</h3>

        <p>{userData.bio}</p>
        <ul>
          <li>
            <b>Location:</b> {userData.location ? userData.location : "Unknown"}
          </li>
          <li>
            <b>Created On:</b> {formatDate(userData.created_at)}
          </li>
          <li>
            <b> Most Used Language:</b> {mostUsedLanguage}
          </li>
        </ul>
        <div className="elementContainer">
          <div className="elements">
            <button className="userElement">
              <b> Repositories:</b> {userData.public_repos}
            </button>
          </div>
          <div className="elements">
            <button className="userElement">
              <b>Public Gists:</b> {userData.public_gists}
            </button>
          </div>
          <div className="elements">
            <button className="userElement">
              <b> Followers:</b> {userData.followers}
            </button>
          </div>
          <div className="elementContainer">
            <div className="elements">
              <button className="userElement">
                <b> Following:</b> {userData.following}
              </button>
            </div>
          </div>

          
        </div>
       <div className="listss"> 
       <div className="elementContainer">
            <div className="elements">
            <button className="userElement followerbutton" onClick={() => setShowFollowers(!showFollowers)}>
         <b>{showFollowers ? "Hide Followers" : "Show Followers"}</b> 
        </button>
        {showFollowers && followers && followers.length > 0 ? (
    <FollowerList followers={followers} />
) : null}
            </div>
          </div>
          <div className="elementContainer">
            <div className="elements">
            <button className="userElement orgbutton" onClick={() => setShoworgs(!showorgs)}>
         <b>{showorgs ? "Hide Organizations" : "Show Organizations"}</b> 
        </button>
        {showorgs && organizations && organizations.length > 0 ? (
    <OrganizationsList organizations={organizations} />
) : null}
            </div>
          </div>
          <div className="elementContainer">
            <div className="elements">
            <button className="userElement starbutton" onClick={() => setStrrepo(!showStrrepo)}>
         <b>{showStrrepo ? "Hide Starred Repo" : "Show Starred Repo"}</b> 
        </button>
        {showStrrepo && starredRepos && starredRepos.length > 0 ? (
           <StarredRepos starredRepos={starredRepos} />
) : null}
            </div>
          </div></div>
       
      </div>
    </div>
  );
}
