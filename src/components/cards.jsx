import React, { useState } from "react";
import SearchBar from "./searchbar";
import Loader from "./loader";
import UserDetails from "./UserDetails";

export default function FetchingData() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);



    const fetchData = () => {
    console.log("Fetching data for username:", username);

    fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            setUserData(data);
            console.log(data);
        })
        .catch((error) => console.error("API didn't fetch"));
};


    return (
        <>
            <SearchBar setUsername={setUsername} fetchData={fetchData} />
            {userData ? <UserDetails userData={userData} /> : <Loader />}
        </>
    );
}