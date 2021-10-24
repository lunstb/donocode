import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet';
import { AppBar, Button, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import clsx from 'clsx'

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
  }));
  

export default function CreateDonoCode(){
    const classes = useStyles()
    
    return (
      <div>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Link className={clsx(classes.title, classes.logo)} to="/">
                    <Typography aria-label="Home" variant="h6">
                        <b>DonoCode</b>
                    </Typography>
                </Link>
                <Link className={classes.title} to="/settings">
                    <Typography aria-label="Home" variant="h6">
                        Setting
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
        <Link className={clsx(classes.title, classes.logo)} to="/">

            <Typography aria-label="Home" variant="h6">
                <b>Back</b>
            </Typography>
        </Link>
      </div>
    
    );
}

