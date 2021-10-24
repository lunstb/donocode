import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Container, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import backArrow from '../images/backArrow.svg';
import clsx from 'clsx'
import { ComponentToPrint } from './ComponentToPrint';
import { PrintContent } from './PrintComponents';

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
    image: {
      marginRight: "7px"
    },
    h1: {
      fontSize: "4vh"
    },
    logo: {
      padding: '0 0 0 10vh',
      margin: "0 20px 0 20vw",
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
    h6: {
      fontSize: "20px",
      fontWeight: 'normal',
      margin: "5px 0",
      textTransform: 'none',
      color: "#51323C",
    },
    nextButton: {
      backgroundColor: "#D9AF00",
      fontSize: '3vh',
      fontFamily: 'Nunito',
      fontWeight: 'bold',
      color: "#51323C",
      textTransform: 'none',
      borderRadius: "8px",
      marginTop: "25px",
      marginRight: "30px",
      width: "13%",
      '&:hover': {
        background: '#C99F00',
      },
    },
    createDonoCodes: {
      backgroundColor: "#D9AF00",
      fontSize: '4vh',
      fontFamily: 'Nunito',
      fontWeight: 'bold',
      color: "#51323C",
      textTransform: 'none',
      borderRadius: "8px",
      marginTop: "25px",
      marginRight: "30px",
      marginLeft: "40%",
      marginBottom: "100px",
      width: "20%",
      '&:hover': {
        background: '#C99F00',
      },
      height: "60px"
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
    image: {
      marginTop: '5px',
      marginRight: '5px',
      height: '25px',
      width: '25px'
    },
    pageContent: {
      marginLeft: "80px",
      marginRight: "50px",
    },
    verticalAlign: {
      marginTop: "8vh"
    },
    grace: {
      marginTop: "12px",
      marginLeft: "20px",
      fontSize: "3vh",
      width: "80px"
    },
    numberField: {
      marginTop: "20px",
      marginRight: "20px",
      width: "20vw",
      marginBottom: "20px",
      fontSize: '6vh',
      [`& fieldset`]: {
          borderRadius: "10px",
      }
    },
    backButton: {
      marginBottom: "-30px",
      height: "20px",
      '&:hover': {
        background: 'none',
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
    textContent: {
      margin: '60px 0'
    },
    resize:{
      fontSize:"4vh"
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
    settingsButton: {
      position: "absolute",
      right: "5vw"
    },
    alignHorizontal:{
      display: "flex",
      justifyContent: "space-between"
    },
    messageField:{
      marginTop: "2px",
      marginRight: "8px"
    },
    floatLeft:{
      float:"left"
    }
  }));
  

function HowManyCodes(classes, currentPage, setCurrentPage, qrCodeNum, setQrCodeNum, messages, setMessages, qrCodes, setQrCodes){
  return (
    <div>
      <Link className={classes.title} to="/dashboard"> 
        <div className={clsx(classes.alignHorizontal,classes.floatLeft)}>
          <img src={backArrow} className={classes.image}/>
          <h6 className={classes.h6}>Back</h6>
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

              // make a fetch request to the server to get the qr codes
              fetch(`http://localhost:3001/api/qr/generatecode/${e.target.value}`) // replace with http://donocode.com/qrcode/generatecode
                  .then(response => response.json())
                  .then(data => {
                    setQrCodes(data)
                  })
                  .catch(error => console.log(error));
              }
            }
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
            <h6 className={classes.h6}>Back</h6>
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
          <TextField id="outlined-basic" value={messages[index]} label="Item Name" variant="outlined" className={classes.messageField} 
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
          <h6 className={classes.h6}>Back</h6>
        </div> 
      </Button>
      <div className={classes.textContent}>
        <h2>Add a personal message with your DonoCode</h2>
        <p>If you choose to not put a personalized message, your recipients will receive a default message. </p>
        
        <h3>Donations: ({qrCodeNum})</h3>
        {rows}
      </div>
      
      <Button onClick={()=>{setCurrentPage(currentPage+1)}}className={classes.createDonoCodes} disableElevation>
          <Typography aria-label="Home" variant="h6">
            Create DonoCodes
          </Typography>
      </Button>
    </div>
  )
}

function PrintComponent(classes, currentPage, setCurrentPage, qrCodes, linkAccount){
  // let qrCodeArray = [...qrCodes];
  // qrCodes.forEach(v => qrCodeArray.push(v));  
  // console.log(qrCodeArray)
  console.log(qrCodes)
  return <div>
    <Button onClick={()=>{setCurrentPage(currentPage-1)}}className={classes.backButton} disableElevation>
          <div className={clsx(classes.alignHorizontal,classes.floatLeft)}>
          <img src={backArrow} className={classes.image}/>
          <h6 className={classes.h6}>Back</h6>
        </div> 
      </Button>
      <PrintContent
        qrCodes={qrCodes}
        linkAccount = {linkAccount}
      />
  </div>
}

export default function CreateDonoCode(){
    const classes = useStyles()
    const [currentPage, setCurrentPage] = useState(0);
    const [qrCodeNum, setQrCodeNum] = useState(1);
    const [linkToAccount, setLinkToAccount] = useState(false);
    const [messages, setMessages] = useState([])
    const [qrCodes, setQrCodes] = useState()

    let page;
    switch (currentPage) {
      case 0:
        page = HowManyCodes(classes, currentPage, setCurrentPage, qrCodeNum, setQrCodeNum, messages, setMessages, qrCodes, setQrCodes)
        break;
      case 1:
        page = LinkToAccount(classes, currentPage, setCurrentPage, linkToAccount, setLinkToAccount)
        break;
      case 2:
        page = AttachMessage(classes, currentPage, setCurrentPage, qrCodeNum, messages, setMessages)
        break;
      default:
        page = PrintComponent(classes, currentPage, setCurrentPage, qrCodes, linkToAccount)
        break;
    }
    console.log(qrCodes)
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
        <div className={classes.pageContent}>
          <div className={classes.verticalAlign}>
            {page}
          </div>
        </div>
      </span>
    
    );
}

