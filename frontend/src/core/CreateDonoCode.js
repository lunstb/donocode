import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Helmet } from 'react-helmet';
import { AppBar, Button, Container, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import backArrow from '../images/backArrow.png';
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
      marginLeft: "50px",
      marginRight: "50px"
    },
    grace: {
      marginTop: "12px",
      marginLeft: "20px",
      fontSize: "3vh",
      width: "80px"
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
    messageResize:{
      height: "7px"
    },
    attachMessage:{
      backgroundColor: "#FFF",
      marginBottom: "6px",
      marginRight: "5vw",
      borderRadius: "8px",
      fontSize: "18px",
      color: "#51323C",
      display: "flex",
      justifyContent: "space-between"
    },
    alignHorizontal:{
      display: "flex",
      justifyContent: "space-between"
    },
    messageField:{
      marginTop: "12px",
      marginRight: "8px"
    },
    floatLeft:{
      float:"left"
    }
  }));
  
function ItemInfo(classes){
  return (
    <div className={classes.itemInfo}>

    </div>
  )
}

function HowManyCodes(classes, currentPage, setCurrentPage, qrCodeNum, setQrCodeNum, messages, setMessages){
  return (
    <div>
      <Link className={classes.title} to="/"> 
        <div className={clsx(classes.alignHorizontal,classes.floatLeft)}>
          <img src={backArrow} className={classes.image}/>
          <Typography aria-label="Home" variant="h6">
            Back
          </Typography>
        </div> 
      </Link>
      <br/>
      <div className={classes.textContent}>
        <h1 className={classes.h1}>How many DonoCodes would you like to create?</h1>
        <div>
          <TextField id="standard-basic" value={qrCodeNum} label="type number here" variant="standard" className={classes.numberField} 
            InputProps={{
              classes: {
                input: classes.resize,
              },
            }}
            onChange={e => {
              setQrCodeNum(e.target.value)
              messages = []

              for(let i = 0; i<e.target.value; ++i){
                messages.push("Donated Item")
              }
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
      
      <Button onClick={()=>{setCurrentPage(currentPage-1)}}className={classes.backButton} disableElevation>
          <div className={clsx(classes.alignHorizontal,classes.floatLeft)}>
          <img src={backArrow} className={classes.image}/>
          <Typography aria-label="Home" variant="h6">
            Back
          </Typography>
        </div> 
      </Button>
      <div className={classes.textContent}>
        <h1 className={classes.h1}>Would you like to link these DonoCodes to your account?</h1>
        <p>For example, if you are a donation center planning to hand DonoCodes out to Donors, click no.</p>
      </div>
      <Button onClick={()=>{setLinkToAccount(true); setCurrentPage(currentPage+1)}}className={classes.nextButton} disableElevation>Yes</Button>
      <Button onClick={()=>{setLinkToAccount(false); setCurrentPage(currentPage+1)}}className={clsx(classes.nextButton, classes.darkColor)} disableElevation>No</Button>
    </div>
  )
}

function AttachMessage(classes, currentPage, setCurrentPage, qrCodeNum, messages, setMessages){
  let rows = [];
  for (let index = 1; index <= qrCodeNum; index++) {
    // const element = array[index];
    rows.push(<div className={classes.attachMessage}>
      <div key={index} className={classes.alignHorizontal}>
        <div className={classes.grace}>{index}</div>
        <div className={classes.alignHorizontal}>
          <TextField id="outlined-basic" value={messages[index]} label="Item" variant="outlined" className={classes.messageField} 
          onChange={e => setMessages({...messages, [index]: e.target.value})}
          InputProps={{
            classes: {
              input: classes.messageResize,
            },
          }}/>
          <p>opt.</p>
        </div>
      </div>
      <Button>Add message</Button>
    </div>);
  }
  return (
    <div>
      <Button onClick={()=>{setCurrentPage(currentPage-1)}}className={classes.backButton} disableElevation>
          <div className={clsx(classes.alignHorizontal,classes.floatLeft)}>
          <img src={backArrow} className={classes.image}/>
          <Typography aria-label="Home" variant="h6">
            Back
          </Typography>
        </div> 
      </Button>
      <h2>Add a personal message with your DonoCode</h2>
      <p>If you choose to not put a personalized message, your recipients will receive a default message. </p>
      
      <h3>Donations: ({qrCodeNum})</h3>
      {rows}
    </div>
  )
}

export default function CreateDonoCode(){
    const classes = useStyles()
    const [currentPage, setCurrentPage] = useState(0);
    const [qrCodeNum, setQrCodeNum] = useState(1);
    const [linkToAccount, setLinkToAccount] = useState(false);
    const [messages, setMessages] = useState([])

    let page;
    switch (currentPage) {
      case 0:
        page = HowManyCodes(classes, currentPage, setCurrentPage, qrCodeNum, setQrCodeNum, messages, setMessages)
        break;
      case 1:
        page = LinkToAccount(classes, currentPage, setCurrentPage, linkToAccount, setLinkToAccount)
        break;
      case 2:
        page = AttachMessage(classes, currentPage, setCurrentPage, qrCodeNum, messages, setMessages)
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

