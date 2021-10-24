import React, { useState } from 'react';
import firebase from '../firebase';
import { useAuth } from '../AuthContext';
import { useHistory, Link } from 'react-router-dom';

const Register = () => {
    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [phone, setPhone] = useState("");
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [confirmPassword, setConfirmPassword] = useState();
    let [isLoading, setIsLoading] = useState(false);
    let [error, setError] = useState("");
    const history = useHistory();

    const { signup } = useAuth();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            return setError("Passwords do not match");
        }
        try {
            setError("");
            setIsLoading(true);
            await signup(email, password);
            history.push("/");
        } catch {
            setError("Error signing up");
        }
        setIsLoading(false);
    }
    
    // show the error in a material UI alert below

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
                <button disabled={isLoading} type="submit">Create account</button>
            </form>
            <div>
            Already have an account? <Link to="/signin">Log in!</Link>
            </div>
        </div>
    )
};

export default Register;