import React, { useState } from 'react';
import firebase from '../../firebase';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            console.log("Incorrent username or password");
        });
    }
    
    return (
        <div>    
        <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={({ target }) =>     
                      setEmail(target.value)}
                    placeholder="Email"
                />
                <br />
                <input
                    type="password"
                    onChange={({ target}) => 
                      setPassword(target.value)}
                    placeholder="Password"
                />
                <br />
                <button type="submit">
                    Sign in
                </button>
            </form>
        </div>
    )
};

export default Login;