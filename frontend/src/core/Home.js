import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet';
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
        color: '#51323C'

    },
    logo: {
        fontWeight: 'bold',
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
    },
    appBar: {
        boxShadow: 'none'
    },
    heroContent: {
        
        lineHeight: '1.3em',
        paddingBottom: '40px'
    },
    login: {
        padding: '10px 25px',
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
        padding: '30vh 7%'
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
        position: 'absolute',
        right: '10px',
        bottom: '20%'
        
    }
  }));
  

export default function Home(){
    const classes = useStyles()
    
    return (
    <span>
    <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
            <Link className={clsx(classes.title, classes.logo)} to="/">
                <Typography aria-label="Home" variant="h6">
                    <b>DonoCode</b>
                </Typography>
            </Link>
            <Link className={classes.title} to="/">
                <Typography aria-label="Home" variant="h6">
                    About
                </Typography>
            </Link>
            <Link className={classes.title} to="/">
                <Typography aria-label="Home" variant="h6">
                    FAQ
                </Typography>
            </Link>
        </Toolbar>
    </AppBar>
    <div className={classes.hero}>
        <Typography variant="h3" className={classes.heroContent}><b>Track your impact<br/>with DonoCode!</b></Typography>
        <Button variant="contained" className={classes.login}><b>Create DonoCode</b></Button>
        <img src={homeImage} width="800px" className={classes.image}/>
    </div>
    
    </span>

    );
}

