import React, { useState } from 'react';
import firebase from '../../firebase';

const Register = () => {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [confirmPassword, setConfirmPassword] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password === confirmPassword){
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        } else {
            alert("Passwords do not match");
        }  
    }
    
    return (
        <div>    
        <h2>Create your DonoPal</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        onChange={({ target }) =>     
                            setFirstName(target.value)}
                        placeholder="First"
                    />
                    <input
                        type="text"
                        onChange={({ target }) =>     
                            setLastName(target.value)}
                        placeholder="Last"
                    />
                </div>
                <label>Contact</label>
                <input
                    type="number"
                    onChange={({ target}) => 
                        setPhone(target.value)}
                    placeholder="Phone Number"
                />
                <br />
                <label>Login info</label>
                <input
                    type="text"
                    onChange={({ target}) => 
                        setEmail(target.value)}
                    placeholder="Email"
                />
                <br />
                <div>
                    <input
                        type="password"
                        onChange={({ target}) => 
                            setPassword(target.value)}
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        onChange={({ target}) => 
                            setConfirmPassword(target.value)}
                        placeholder="Confirm Password"
                    />
                </div>
                <button type="submit">Create account</button>
            </form>
        </div>
    )
};

export default Register;