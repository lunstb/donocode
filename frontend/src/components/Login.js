import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    let [isLoading, setIsLoading] = useState(false);
    let [error, setError] = useState("");
    const history = useHistory();
    
    const { signin } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setIsLoading(true);
            await signin(email, password);
            history.push("/");
        } catch {
            setError("Failed to log in");
        }
        setIsLoading(false);
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
            <button disabled={isLoading} type="submit">
                Sign in
            </button>
        </form>
        <div>
            Don't have an account? <Link to="/signup">Create one today!</Link>
        </div>
        </div>
    )
};

export default Login;