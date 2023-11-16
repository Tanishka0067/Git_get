import React, { useState,useEffect } from "react";
import SearchBar from "./searchbar";
import Loader from "./loader";
import UserDetails from "./UserDetails";
 
export default function FetchingData() {
  
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [repos, setRepos] = useState([]);
    const [mostUsedLanguage, setMostUsedLanguage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [starredRepos, setStarredRepos] = useState([]);
    const [organizations, setOrganizations] = useState([]);
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

const fetchStarredRepos = () => {
  setLoading(true);
  console.log("Fetching data for starred repo:", starredRepos);
  fetch(`https://api.github.com/users/${username}/starred`)
    .then((starredResponse) => starredResponse.json())
    .then((starredData) => {
      setStarredRepos(starredData);
      console.log(starredData);
    })
    .catch((error) => {
      console.error("Error fetching starred repositories:");
    })
    .finally(() => {
      setLoading(false);
    });
};



const fetchRepo = () => {
  setLoading(true);
  console.log("Fetching data for Repos:", repos);
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
const fetchOrgs = () => {
  setLoading(true);
  console.log("Fetching data for ogs:", organizations);
  fetch(`https://api.github.com/users/${username}/orgs`)
    .then((orgsResponse) => orgsResponse.json())
    .then((orgsData) => {
      setOrganizations(orgsData);
      console.log(organizations);
    })
    .catch((error) => {
      console.error("Error fetching ogs:", error);
    })
    .finally(() => {
      setLoading(false);
    });
};
useEffect(() => {
  if (username.trim() !== "") {
    fetchData();
    fetchFollower();
    fetchRepo();
    fetchStarredRepos();
    fetchOrgs();
  }
}, [username]);

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
const fetchUserData=()=>{
fetchData();
fetchFollower();
fetchRepo();
fetchStarredRepos();
}
return (
    <>
      <SearchBar setUsername={setUsername} fetchUserData={fetchUserData} />
      {loading ? <Loader /> : null}
      {userData ? <UserDetails userData={userData}  mostUsedLanguage={mostUsedLanguage} starredRepos={starredRepos} followers={followers} organizations={organizations}/> : null}
    </>
  );
}