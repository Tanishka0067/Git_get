
import React from "react";

const OrganizationList = ({ organizations }) => {
  return (
    <div>
      <h2>Organizations:</h2>
      {organizations.length > 0 ? (
        organizations.map((organization) => (
          <div key={organization.id} className="organization">
            <img src={organization.avatar_url} alt="" />
            <div className="organizationName">
              <p>{organization.login}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No organizations found</p>
      )}
    </div>
  );
};

export default OrganizationList;

