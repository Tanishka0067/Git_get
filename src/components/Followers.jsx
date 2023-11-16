import React, { useState } from "react";

const FollowerList = ({ followers: initialFollowers }) => {
  const [followers, setFollowers] = useState(initialFollowers);
 
  const [visible, setVisible] = useState(5);

  const handleLoadMore = () => {
    setVisible((prevVisible) => prevVisible + 5);
  };

  return (
    <><div className="followerSection">
      <div className="follower-listdisp">
    <h2 className="followtitle">Followers:</h2>

    {followers && followers.length > 0 ? (
      followers.slice(0, visible).map((follower) => (
        <div key={follower.id} className="follower">
          <img src={follower.avatar_url} alt="" className="follower-avatar"/>
          <div className="followername">
            <p><b>Name :</b>{follower.login}</p>
          </div>
        </div>
      ))
    ) : (
      <p>No followers found</p>
    )}

    
  </div>
  {followers && followers.length > visible && (
    <button className="loadmore" onClick={handleLoadMore}>Load More</button>
  )}</div></>
  );
};

export default FollowerList;
