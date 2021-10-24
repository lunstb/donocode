import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { useHistory, Link } from 'react-router-dom';
import { AppBar, Toolbar, makeStyles, Typography } from '@material-ui/core';
import clsx from 'clsx'
import homeImage from '../images/HomeTest.svg'


const useStyles = makeStyles((theme) => ({
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
    inputGroup: {
        background: 'transparent',
        border: '1px solid #9D8A8B',
        borderRadius: '7px',
        padding: '14px 15px',
        width: '33vw',
        margin: '7px 0',
        fontFamily: 'inherit',
        fontSize: '18px',
        ['@media(max-width: 950px)'] : {
            
            width: '400px',
          },
        
    },
    inputhalfleft: {
        background: 'transparent',
        border: '1px solid #9D8A8B',
        borderRadius: '7px',
        padding: '14px 15px',
        width: '16vw',
        margin: '15px .5vw 15px 0',
        fontFamily: 'inherit',
        fontSize: '18px',
        ['@media(max-width: 950px)'] : {
            
            width: '400px',
            margin: '0 80px'
          },
    },
    inputhalfright: {
        background: 'transparent',
        border: '1px solid #9D8A8B',
        borderRadius: '7px',
        padding: '14px 15px',
        width: '16vw',
        margin: '15px 0 15px .5vw',
        fontFamily: 'inherit',
        fontSize: '18px',
        ['@media(max-width: 950px)'] : {
            
            width: '400px',
          },
    },
    login: {
        marginTop: '0px',
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
        margin: '15px 0 10px 0',
        fontSize: '18px'
    },
    signin: {
        border: '0 solid #9D8A8B',
        backgroundColor: '#d9af00',
        borderRadius: '5px',
        fontFamily: 'inherit',
        padding: "20px 50px",
        "&:hover": {
            cursor: "pointer",
            backgroundColor: '#e4c74c',
        },
        fontWeight: '800',
        fontSize: '20px',
        margin: '20px'
    },
    image: {
        ['@media(min-width: 950px)'] : {
            position: 'absolute',
            width: '46em'
          },
          ['@media(max-width: 1300px)'] : {
            
            width: '30em'
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
        marginTop: '40px',
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
    field: {
        fontWeight: '600',
        fontSize: '18px'
    }
  }));

const Register = () => {
    const classes = useStyles()
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
            let userCredential = await signup(email, password);
            let userId = userCredential.user.uid;
            let user = {
                fireId: userId,
                firstName,
                lastName,
                phone
            };
            await fetch("/api/user/createuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });
            history.push("/");
        } catch {
            setError("Error signing up");
        }
        setIsLoading(false);
    }
    
    // show the error in a material UI alert below

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
        <div style={{width: '100vw', fontSize: '25px'}}><h2 style={{padding: 'none'}}>Create your DonoPal</h2></div>
            <form onSubmit={handleSubmit} className={classes.formstuff}>
                <div>
                    <label className={classes.field}>Name</label><br/>
                    <input
                        type="text"
                        onChange={({ target }) =>     
                            setFirstName(target.value)}
                        placeholder="First"
                    className={classes.inputhalfleft}
                    />
                    <input
                        type="text"
                        onChange={({ target }) =>     
                            setLastName(target.value)}
                        placeholder="Last"
                    className={classes.inputhalfright}
                    />
                </div>
                <label className={classes.field}>Contact</label><br/>
                <input
                    type="number"
                    onChange={({ target}) => 
                        setPhone(target.value)}
                    placeholder="Phone Number"
                    className={classes.input}
                />
                <br />
                <label className={classes.field}>Login info</label><br/>
                <div style={{margin: '8px 0 0 0'}}></div>
                <input
                    type="text"
                    onChange={({ target}) => 
                        setEmail(target.value)}
                    placeholder="Email"
                    className={classes.inputGroup}
                />
                <br />
                <div>
                    <input
                        type="password"
                        onChange={({ target}) => 
                            setPassword(target.value)}
                        placeholder="Password"
                    className={classes.inputGroup}
                    /><br/>
                    <input
                        type="password"
                        onChange={({ target}) => 
                            setConfirmPassword(target.value)}
                        placeholder="Confirm Password"
                    className={classes.inputGroup}
                    />
                </div>
                <div className={classes.buttonFill}>
                <button disabled={isLoading}  className={classes.signin} type="submit">Create account</button>
                </div>
            </form>
            </div>

        <img src={homeImage} className={classes.image}/>
        </div>
    )
};

export default Register;