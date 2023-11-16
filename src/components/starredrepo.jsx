import React from "react";

const StarredRepos = ({ starredRepos }) => {
  return (
    <div>
      

      {starredRepos && starredRepos.length > 0 ? (
        starredRepos.map((repo) => (
          <div key={repo.id} className="repo">
            <p>
            <b>Name:</b> {repo.name}
            </p>
            <p>
            <b>Owner:</b> {repo.owner.login}
            </p>
          </div>
        ))
      ) : (
        <p>No starred repositories found</p>
      )}
    </div>
  );
};

export default StarredRepos;
