import React, { useState } from "react";

const FollowerList = ({ followers }) => {
  const [visible, setVisible] = useState(5);

  const handleLoadMore = () => {
    setVisible(visible + 5);
  };

  return (
    <div>
      <h2>Followers:</h2>

      {followers && followers.length > 0 ? (
        followers.slice(0, visible).map((follower) => (
          <div key={follower.id} className="follower">
            <img src={follower.avatar_url} alt="" />
            <div className="followerp">
              <p>{follower.login}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No followers found</p>
      )}

      {followers && followers.length > visible && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default FollowerList;
