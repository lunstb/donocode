import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Container, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import clsx from 'clsx'
import { useAuth } from "../AuthContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    h1: {
      color: '#51323C',
      fontSize: '8vh',
      fontFamily: 'Nunito'
    },
    h3: {
      color: '#51323C',
      fontSize: '4vh',
      fontFamily: 'Nunito',
    },
    settingsButton: {
      position: "absolute",
      right: "5vw"
    },
    pageContent: {
      marginLeft: '6.25%'
    },
    textField: {
      marginRight: "20px",
      width: "15vw",
      marginBottom: "20px",
      fontSize: '3.5vh',
      [`& fieldset`]: {
          borderRadius: "10px",
      },
    },
    saveButton: {
      backgroundColor: "#D9AF00",
      fontSize: '4vh',
      fontFamily: 'Nunito',
      fontWeight: 'bold',
      color: "#51323C",
      textTransform: 'none',
      borderRadius: "8px",
      marginTop: "25px",
      marginLeft: "45%",
      width: "10%"
    },
    logoutButton: {
      fontSize: '4vh',
      fontFamily: 'Nunito',
      fontWeight: 'bold',
      color: "#51323C",
      textTransform: 'none',
      borderRadius: "8px",
      marginTop: "25px",
      marginLeft: "45%",
      width: "10%"
    },
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
    emptyDiv: {
      ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
        width: '0%'
      }
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
    alignHorizontal: {
      display: "flex",
      justifyContent: "space-between"
    },
    wideTextInput: {
      width: "30vw"
    },
    child: {
      width: "100%"
    },
    toolbar: {
      backgroundColor: '#fefbef',
      padding: '0'
  },
    appBar: {
      boxShadow: 'none',
      marginTop: '50px'
  },
  }));
  

export default function Settings(){
    const [error, setError] = useState(null);
    const { currentUser, signout } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSignout = async () => {
        setError("");
        try {
            setIsLoading(true);
            await signout();
            setIsLoading(false);
            history.push("/signin");
        } catch {
            setError("Error signing out");
        }
    };

    const classes = useStyles()
    
    return (
      <div>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Link className={clsx(classes.title, classes.logo)} to="/dashboard">
                    <Typography aria-label="Home" variant="h4">
                        <b style={{fontWeight: '900'}}>DonoCode</b>
                    </Typography>
                </Link>
                <Link className={clsx(classes.title, classes.settingsButton)} to="/settings">
                    <Typography aria-label="Home" variant="h6">
                        Settings
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
        <div className={classes.pageContent}>
          <h1 className={classes.h1}>Settings</h1>
          <div>
            <h3 className={classes.h3}>Name</h3>
            <div>
              <TextField className={classes.textField} label="First Name" id="outlined-basic" variant="outlined" />
              <TextField className={classes.textField} label="Last Name" id="outlined-basic" variant="outlined" />
              
            </div>
          </div>

          <div className={classes.alignHorizontal}>
            <div className={classes.child}>
              <h3 className={classes.h3}>Login Email</h3>
              <TextField className={clsx(classes.textField,classes.wideTextInput)} label="Email" id="outlined-basic" variant="outlined" />
            </div>
            <div className={classes.child}>
              <h3 className={classes.h3}>Contact</h3>
              <TextField className={clsx(classes.textField,classes.wideTextInput)} label="Phone Number" id="outlined-basic" variant="outlined" />
            </div>
            <div className={clsx(classes.child, classes.emptyDiv)}></div>

          </div>
          
          <div>
            <h3 className={classes.h3}>Change Password</h3>
            <TextField className={clsx(classes.textField,classes.wideTextInput)} id="outlined-basic" label="Current Password" variant="outlined" type="password" />
            <div>
              <TextField className={clsx(classes.textField,classes.wideTextInput)} id="outlined-basic" label="New Password" variant="outlined" type="password" />
              <TextField className={clsx(classes.textField,classes.wideTextInput)} id="outlined-basic" label="Confirm Password" variant="outlined" type="password" />
            </div>
            
          </div>
        </div>
        <Button className={classes.saveButton} variant="contained" disableElevation>Save</Button>
        <Button className={classes.logoutButton} disabled={isLoading} disableElevation onClick={handleSignout}>Log Out</Button>
    </div>
    );
}
