import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import clsx from 'clsx'
import homeImage from '../images/Homepage.png'

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
        marginTop: '20px'
    },
    heroContent: {
        
        lineHeight: '1.3em',
        paddingBottom: '7vh',
        ['@media(max-width: 950px)'] : {
            
            paddingBottom: '5vh'
          },
        color: '#51323C'
    },
    login: {
        padding: '15px 25px',
        boxShadow: 'none',
        textTransform: 'none',
        borderRadius: '5px',
        backgroundColor: '#d9af00',
        textColor: 'black',
        fontSize: '18px',
        '&:hover': {
            backgroundColor: '#e4c74c',
            boxShadow: 'none'
        }
    },
    hero: {
        padding: '20vh 7%',
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
    image: {
        ['@media(min-width: 950px)'] : {
            position: 'absolute',
            width: '40em'
          },
        ['@media(max-width: 950px)'] : {
            
            position: 'relative',
            width: '25em'
          },
        right: '6%',
        bottom: '20vh',
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
  

export default function Home(){
    const classes = useStyles()
    
    return (
    <span>
    <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
            <Link className={clsx(classes.title, classes.logo)} to="/">
                <Typography aria-label="Home" variant="h4">
                    <b style={{fontWeight: '900'}}>DonoCode</b>
                </Typography>
            </Link>
            <Link className={classes.title} to="/">
                <Typography aria-label="Home" variant="h5">
                    How it Works
                </Typography>
            </Link>
            <Link className={classes.title} to="/">
                <Typography aria-label="Home" variant="h5">
                    FAQ
                </Typography>
            </Link>
        </Toolbar>
    </AppBar>
    <div className={classes.hero}>
        <Typography variant="h2" className={classes.heroContent}><b style={{fontWeight: '800'}}>Track your impact<br/>with DonoCode!</b></Typography>
        <Link to="/signin" className={classes.signinlink}>
        <Button variant="contained" className={classes.login}><b>Create DonoCode</b></Button>
        </Link>
        <img src={homeImage} className={classes.image}/>
    </div>
    
    </span>

    );
}
