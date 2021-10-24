import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import clsx from 'clsx'
import firebase from './../firebase'


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
    settingsButton: {
      position: "absolute",
      right: "5vw"
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
    heroContent: {
        marginTop: '2vh',
        lineHeight: '1.3em',
        paddingBottom: '7vh',
        ['@media(max-width: 950px)'] : {
            
            paddingBottom: '5vh'
          },
        color: '#51323C'
    },
    login: {
        padding: '15px 30px',
        boxShadow: 'none',
        textTransform: 'none',
        borderRadius: '9px',
        backgroundColor: '#d9af00',
        textColor: 'black',
        fontSize: '23px',
        '&:hover': {
            backgroundColor: '#e4c74c',
            boxShadow: 'none'
        }
    },
    hero: {
        padding: '5vh 10vh 20vh 10vh',
        ['@media(max-width: 950px)'] : {
            
            textAlign: 'center'
          },
    },
    createText: {
        '&:link': {
            textDecoration: 'none',
            color: '#51323C'
        },
        '&:visited': {
            textDecoration: 'none',
            color: '#51323C'
        },
        textDecoration: 'none',
    },
    alignHorizontal: {
      display: "flex",
      justifyContent: "space-between"
    },
    signinlink: {
        '&:link': {
            textDecoration: 'none',
        },
        '&:visited': {
            textDecoration: 'none',
        },
    }
  }));
  

async function ShowDonations() {
    let donationsByDate = {};
    await fetch(`http://localhost:3001/api/user/getdonations/${firebase.auth().currentUser.uid}`) // replace with http://donocode.com/qrcode/generatecode
                  .then(response => response.json())
                  .then(data => {
                      data.forEach(element => {
                          let info = donationsByDate[element.dateReceived] == null ? [] : donationsByDate[element.dateReceived];
                          info.push({
                              message: element.message
                          })
                          data[element.dateReceived] = info;
                      });
                    console.log(data)
                  })
                  .catch(error => console.log(error));
    return (
        <div>
            Showing donations here
        </div>
    )
}

export default function Dashboard(){
    const classes = useStyles()
    
    return (
    <span>
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
    <div className={classes.hero}>
        <div className={classes.alignHorizontal}>
          <Typography variant="h3" className={classes.heroContent}><b style={{fontWeight: '800'}}>My Donations</b></Typography>
          <Link to="/createdonocode" className={classes.signinlink}>
            <Button variant="contained" className={classes.login}><b>Create DonoCode</b></Button>
          </Link>
        </div>
        <div>
            {/* <ShowDonations/> */}
        </div>
    </div>
    
    </span>

    );
}
