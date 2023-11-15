import React, { useState,useEffect } from "react";
import SearchBar from "./searchbar";
import Loader from "./loader";
import UserDetails from "./UserDetails";

export default function FetchingData() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [organizations, setOrganizations] = useState([]);
    const [starredRepos, setStarredRepos] = useState([]);
    const fetchData = () => {
        setLoading(true);
    console.log("Fetching data for username:", username);
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            setUserData(data);
            console.log(data);
            setLoading(false);})
        .catch((error) =>{ console.error("API didn't fetch");
        setLoading(false);});
};
const fetchFollower=()=>{
    setLoading(true);
    console.log("Fetching data for followers:", followers);
    fetch(`https://api.github.com/users/${username}/followers`)
        .then((followerResponse) => followerResponse.json())
        .then((data2) => {
            setFollowers(data2);
            console.log(data2);
            setLoading(false);})
}

const [repos, setRepos] = useState([]);
const [mostUsedLanguage, setMostUsedLanguage] = useState(null);

useEffect(() => {
  if (username.trim() !== "") {
    fetchData();
  }
}, [username]);

const fetchRepo = () => {
  setLoading(true);

  // Fetch repos
  fetch(`https://api.github.com/users/${username}/repos`)
    .then((reposResponse) => reposResponse.json())
    .then((reposData) => {
      setRepos(reposData);
      calculateMostUsedLanguage(reposData);
    })
    .catch((error) => {
      console.error("Error fetching GitHub repos:", error);
    })
    .finally(() => {
      setLoading(false);
    });
};

const calculateMostUsedLanguage = (repos) => {
  const languages = {};

  repos.forEach((repo) => {
    if (repo.language) {
      languages[repo.language] = (languages[repo.language] || 0) + 1;
    }
  });

  const maxLanguage = Object.keys(languages).reduce((a, b) =>
    languages[a] > languages[b] ? a : b
  );

  setMostUsedLanguage(maxLanguage);
};
fetch(`https://api.github.com/users/${username}/orgs`)
.then((orgResponse) => orgResponse.json())
.then((orgData) => {
  setOrganizations(orgData);
});
fetch(`https://api.github.com/users/${username}/starred`)
    .then((starredResponse) => starredResponse.json())
    .then((starredData) => {
      setStarredRepos(starredData);
      console.log(starredData);
    })
    .catch((error) => {
      console.error("Error fetching starred repositories:", error);
    })
return (
    <>
      <SearchBar setUsername={setUsername} fetchData={fetchData} />
      {loading ? <Loader /> : null}
      {userData ? <UserDetails userData={userData}  mostUsedLanguage={mostUsedLanguage} starredRepos={starredRepos} /> : null}
       {followers.length > 0 ? <followers followers={followers} /> : null} 
       {organizations.length > 0 ? (
        <OrganisationList organizations={organizations} />
      ) : null}
    </>
  );
}