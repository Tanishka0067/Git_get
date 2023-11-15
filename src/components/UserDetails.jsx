import React, { useState, useEffect } from "react";
import FollowerList from "./Followers"; 

export default function UserDetails({ userData, mostUsedLanguage, followers ,Organizations}) {
  const [showFollowers, setShowFollowers] = useState(false);
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
            <b>Location:</b> {userData.location}
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

          <div className="elementContainer">
            <div className="elements">
            <button className="userElement" onClick={() => setShowFollowers(!showFollowers)}>
          {showFollowers ? "Hide Followers" : "Show Followers"}
        </button>
       {showFollowers && followers && followers.length > 0 ? (
        <FollowerList followers={followers} />
      ) : null}
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
}
