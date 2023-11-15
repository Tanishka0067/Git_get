import React, { useState } from "react";
import SearchBar from "./searchbar";
import Loader from "./loader";
import UserDetails from "./UserDetails";

export default function FetchingData() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [followers, setFollowers] = useState([]);
    const [loading, setLoading] = useState(false);

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

return (
    <>
      <SearchBar setUsername={setUsername} fetchData={fetchData} />
      {loading ? <Loader /> : null}
      {userData ? <UserDetails userData={userData} /> : null}
    
    </>
  );
}