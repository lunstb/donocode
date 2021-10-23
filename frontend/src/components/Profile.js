import firebase from "../firebase";
import React, { useState, useEffect } from "react";

const Profile = () => {
    const [user, setUser] = useState(null);
    let [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let currentUser = firebase.auth().currentUser;
        if (currentUser) {
            setUser(currentUser);
            setIsLoading(false);
        }
    }, []);

    const handleSignout = () => {
        firebase.auth().signOut();
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <p>Name: {user.firstName}</p>
                <p>Phone: {user.phone}</p>
                <p>Email: {user.email}</p>
            </div>
            <div>
                <button onClick={handleSignout}>Sign Out</button>
            </div>
        </div>
    );
};

export default Profile;
