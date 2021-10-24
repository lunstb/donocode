import firebase from "../firebase";
import React, { useState, useEffect } from "react";
import { useAuth } from "../AuthContext";
import { useHistory } from "react-router-dom";

const Profile = () => {
    const [error, setError] = useState(null);
    const { currentUser, signout } = useAuth();
    const history = useHistory();

    const handleSignout = async () => {
        setError("");
        try {
            await signout();
            history.push("/signin");
        } catch {
            setError("Error signing out");
        }
    };

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <p>Name: {currentUser.firstName}</p>
                <p>Phone: {currentUser.phone}</p>
                <p>Email: {currentUser.email}</p>
            </div>
            <div>
                <button onClick={handleSignout}>Sign Out</button>
            </div>
        </div>
    );
};

export default Profile;
