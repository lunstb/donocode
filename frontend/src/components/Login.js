import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, makeStyles, Typography } from '@material-ui/core';
import { useAuth } from '../AuthContext';
import clsx from 'clsx';
import homeImage from '../images/HomeTest.svg'

const useStyles = makeStyles((theme)=> ({
    title: {

        '&:link': {
            textDecoration: 'none',
            color: '#51323C'
        },
        '&:visited': {
            textDecoration: 'none',
            color: '#51323C'
        },
        color: '#51323C',
        margin: "0 20px"

    },
    logo: {
        padding: '0 0 0 10vh',
        margin: "0 20px 0 0",
        fontWeight: '900!important',
        color: '#d9af00',
        '&:link': {
            textDecoration: 'none',
            color: '#d9af00'
        },
        '&:visited': {
            textDecoration: 'none',
            color: '#d9af00'
        },
    },
    
    toolbar: {
        backgroundColor: '#fefbef',
        padding: '0'
    },
    appBar: {
        boxShadow: 'none',
        marginTop: '50px'
    },
    input: {
        background: 'transparent',
        border: '1px solid #9D8A8B',
        borderRadius: '7px',
        padding: '14px 15px',
        width: '33vw',
        margin: '15px 0',
        fontFamily: 'inherit',
        fontSize: '18px',
        ['@media(max-width: 950px)'] : {
            
            width: '400px',
          },
        
    },
    login: {
        marginTop: '80px',
        marginLeft: '10vh',
        width: '33vw',
        ['@media(max-width: 950px)'] : {
            
            marginLeft:' 0',
            textAlign: 'center'
          },
    },
    signup: {
        color: '#d9af00',
        '&:link': {
            textDecoration: 'none',
            color: '#d9af00'
        },
        '&:visited': {
            textDecoration: 'none',
            color: '#d9af00'
        },
    },
    register: {
        fontWeight: '600',
        margin: '20px 0 10px 0',
        fontSize: '18px'
    },
    signin: {
        border: '0 solid #9D8A8B',
        backgroundColor: '#d9af00',
        borderRadius: '5px',
        fontFamily: 'inherit',
        padding: "15px 70px",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: '#e4c74c',
        },
        fontWeight: '800',
        fontSize: '20px',
        margin: '80px'
    },
    image: {
        ['@media(min-width: 950px)'] : {
            position: 'absolute',
            width: '46em'
          },
        ['@media(max-width: 950px)'] : {
            
            position: 'relative',
            display: 'none'
          },
          right: '10%',
          bottom: '12%',
    },
    buttonFill: {
        width: '33vw', 
        textAlign: 'center',
        ['@media(max-width: 950px)'] : {
            
            width: '100vw',
          },
    },
    signintitle: {
        fontSize: '30px',
        ['@media(max-width: 950px)'] : {
            width: '100vw'
          },
    },
    formstuff: {
        ['@media(max-width: 950px)'] : {
            width: '100vw',
        
          },
    },
    })
);

const Login = () => {
    const classes = useStyles();
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
            history.push("/dashboard");
        } catch {
            setError("Failed to log in");
        }
        setIsLoading(false);
    }
    
    return (
        <div>    
        <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
            <Link className={clsx(classes.title, classes.logo)} to="/">
                <Typography aria-label="Home" variant="h4">
                    <b style={{fontWeight: '900'}}>DonoCode</b>
                </Typography>
            </Link>
        </Toolbar>
    </AppBar>
        <div className={classes.login}>
            <h2 className={classes.signintitle}>Sign In</h2>
            <form onSubmit={handleSubmit} className={classes.formstuff}>
                <input
                    type="text"
                    onChange={({ target }) =>     
                        setEmail(target.value)}
                    placeholder="Email"
                    className={classes.input}
                />
                <br />
                <input
                    type="password"
                    onChange={({ target}) => 
                        setPassword(target.value)}
                    placeholder="Password"
                    className={classes.input}
                />
                <br />
                <div className={classes.register}>
                Don't have an account? <Link to="/signup" className={classes.signup}><b style={{fontWeight: '800'}}>Create one today!</b></Link>
            </div>
            <div className={classes.buttonFill}>
                <button className={classes.signin} disabled={isLoading} type="submit">
                    <b>Sign in</b>
                </button>
            </div>
            </form>
        </div>
        <img src={homeImage} className={classes.image}/>
        
        
        </div>
    )
};

export default Login;