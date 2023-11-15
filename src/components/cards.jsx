import React, { useState } from "react";
import SearchBar from "./searchbar";
import Loader from "./loader";
import UserDetails from "./UserDetails";

export default function FetchingData() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    // const [followers, setFollowers] = useState([]);

    const fetchData = () => {
    console.log("Fetching data for username:", username);
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            setUserData(data);
            console.log(data);})
        .catch((error) => console.error("API didn't fetch"));
};
// const fetchFollower=()=>{
//     fetch(`https://api.github.com/users/${username}/followers`)
//         .then((followerResponse) => followerResponse.json())
//         .then((data2) => {
//             setFollowers(data2);
//             })
// }
    return (
        <>
            <SearchBar setUsername={setUsername} fetchData={fetchData} />
            {userData ? <UserDetails userData={userData} /> : <Loader />} 

        </>
    );
}