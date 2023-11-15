import React, { useState, useEffect } from "react";
import FollowerList from "./Followers"; // Import the FollowerList component
import Organizations from "./Organization";
export default function UserDetails({ userData, mostUsedLanguage, followers ,Organizations}) {
  const [showFollowers, setShowFollowers] = useState(false);

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
            <b>Location:</b> {userData.location}
          </li>
          <li>
            <b>Created On:</b> {userData.created_at}
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
          <div className="elementContainer">
            <div className="elements">
            <button className="userElement" onClick={() => setShowFollowers(!showFollowers)}>
          {showFollowers ? "Hide Followers" : "Show Followers"}
        </button>
        {showFollowers && followers.length > 0 ? (
          <FollowerList followers={followers} />
        ) : null}
            </div>
          </div>
          
        </div>

        <div className="box">
     
      <h3>Starred Repositories</h3>
      <div className="starred-repos">
        {starredRepos.map((repo) => (
          <div key={repo.id} className="repo">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </div>
        ))}
      </div>
    </div>
      
      </div>
    </div>
  );
}
