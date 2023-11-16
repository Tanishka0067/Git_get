import React from "react";

const OrganizationsList = ({ organizations }) => {
  return (
    <div>
      <h2 className="orgTitle">Organizations:</h2>

      {organizations && organizations.length > 0 ? (
        <ul className="orgName">
            <b>Org:</b>
          {organizations.map((org) => (
            <li key={org.id}>{org.login}</li>
          ))}
        </ul>
      ) : (
        <p>No organizations found</p>
      )}
    </div>
  );
};

export default OrganizationsList;
