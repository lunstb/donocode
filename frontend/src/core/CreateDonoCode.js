import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet';
import { AppBar, Button, Container, TextField, Typography } from '@material-ui/core';
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
    h1: {
      fontSize: "5vh"
    },
    nextButton: {
      backgroundColor: "#D9AF00",
      fontSize: '4vh',
      fontFamily: 'Nunito',
      fontWeight: 'bold',
      color: "#51323C",
      textTransform: 'none',
      borderRadius: "8px",
      marginTop: "25px",
      marginRight: "30px",
      width: "10%",
      '&:hover': {
        background: '#C99F00',
      },
    },
    darkColor: {
      backgroundColor: "#51323C",
      color: "#D9AF00",
      '&:hover': {
        background: '#41222C',
      },
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
    pageContent: {
      marginLeft: "50px"
    },
    numberField: {
      marginRight: "20px",
      width: "20vw",
      marginBottom: "20px",
      fontSize: '6vh',
      [`& fieldset`]: {
          borderRadius: "10px",
      }
    },
    toolbar: {
        backgroundColor: '#fefbef',
    },
    appBar: {
        boxShadow: 'none'
    },
    textContent: {
      marginBottom: '40px'
    },
    resize:{
      fontSize:"6vh"
    },
  }));
  


function HowManyCodes(classes, currentPage, setCurrentPage){
  return (
    <div>
      <Link className={classes.title} to="/">
        <Typography aria-label="Home" variant="h6">
          Back
        </Typography>
      </Link>
      <div className={classes.textContent}>
        <h1 className={classes.h1}>How many DonoCodes would you like to create?</h1>
        <div>
          <TextField id="standard-basic" label="type number here" variant="standard" className={classes.numberField} 
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
          />
        </div>
      </div>
      <div>
        <Button onClick={()=>{setCurrentPage(currentPage+1)}}className={classes.nextButton} variant="contained" disableElevation>Next</Button>
      </div>
    </div>
  )
}

function LinkToAccount(classes, currentPage, setCurrentPage, linkToAccount, setLinkToAccount){
  return (
    <div>
      <Button onClick={()=>{setCurrentPage(currentPage-1)}}className={classes.backButton} disableElevation>Back</Button>
      <div className={classes.textContent}>
        <h1 className={classes.h1}>Would you like to link these DonoCodes to your account?</h1>
        <p>For example, if you are a donation center planning to hand DonoCodes out to Donors, click no.</p>
      </div>
      <Button onClick={()=>{setLinkToAccount(true); setCurrentPage(currentPage+1)}}className={classes.nextButton} disableElevation>Yes</Button>
      <Button onClick={()=>{setLinkToAccount(false); setCurrentPage(currentPage+1)}}className={clsx(classes.nextButton, classes.darkColor)} disableElevation>No</Button>
    </div>
  )
}

function AttachMessage(classes, currentPage, setCurrentPage){
  return (
    <div>
      <Button onClick={()=>{setCurrentPage(currentPage-1)}}className={classes.backButton} disableElevation>Back</Button>
      <h2>Add a personal message with your DonoCode</h2>
      <p>If you choose to not put a personalized message, your recipients will receive a default message. </p>
      
    </div>
  )
}

export default function CreateDonoCode(){
    const classes = useStyles()
    const [currentPage, setCurrentPage] = useState(0);
    const [linkToAccount, setLinkToAccount] = useState(false);

    let page;
    switch (currentPage) {
      case 0:
        page = HowManyCodes(classes, currentPage, setCurrentPage)
        break;
      case 1:
        page = LinkToAccount(classes, currentPage, setCurrentPage, linkToAccount, setLinkToAccount)
        break;
      case 2:
        page = AttachMessage(classes, currentPage, setCurrentPage)
        break;
      default:
        break;
    }
    
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
        <div className={classes.pageContent}>
          {page}
        </div>
      </div>
    
    );
}

