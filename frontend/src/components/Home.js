import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Item, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import clsx from 'clsx'
import homeImage from '../images/HomeTest.svg'
import Stage1 from '../images/Stage1.svg'
import Stage2 from '../images/Stage2.svg'
import Stage3 from '../images/Stage3.svg'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',

        minHeight: '800px',
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
        color: '#51323C',
        fontSize: '23px',
        '&:hover': {
            backgroundColor: '#e4c74c',
            boxShadow: 'none'
        }
    },
    hero: {
        padding: '25vh 10vh 20vh 10vh',
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
            width: '46em'
          },
        ['@media(max-width: 950px)'] : {
            
            position: 'relative',
            width: '0'
          },
        right: '10%',
        bottom: '12%',
    },
    imageAbout: {
        width:'200px',
        padding: '25px 0 25px 0',
    },
    signinlink: {
        '&:link': {
            textDecoration: 'none',
        },
        '&:visited': {
            textDecoration: 'none',
        },
    },
    about: {
        width: '100vw',
        height: '100vh',
        minHeight: '800px',
        backgroundColor: 'white',
        ['@media(max-width: 950px)'] : {
            textAlign: 'center',
            height: 'auto'
          },
          color: "#51323C"
    },
    groupSet: {
        width: '100vw',
        textAlign: 'center'
    },
    grid: {
        width:'85vw',
        padding: '50px 0 50px 0',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center',
        gap: '5%',
        gridAutoFlow: 'column',
        ['@media(max-width: 1130px)'] : {
            gap: '10%'
          },
        ['@media(max-width: 950px)'] : {
            display: 'inherit',
            justifyContent: 'inherit',
            alignContent: 'inherit',
            gap: 'inherit',
            gridAutoFlow: 'inherit',
          },
    },
    width: {
        ['@media(max-width: 950px)'] : {
            width: '400px'
          },
    },
    titleAbout: {
        fontSize: '35px'
    },
    paraAbout: {
        fontSize: '20px'
    },
    abouttitle: {
        // fontSize: '4.5em', 
        fontSize: '60px',
        fontWeight:'900',
        marginLeft: '10vh',
        paddingTop: '100px',
        ['@media(max-width: 950px)'] : {
            margin: '80px',
            // marginLeft: '0'
          },
    },
    faq: {
        color: '#51323C',
        fontSize: '4.5em',
        fontWeight:'900',
        margin: '10vh',
        // paddingTop: '100px ',

        // ['@media(max-width: 950px)'] : {
            
        //     marginLeft: '0'
        //   },

    },
    faqinfo: {
        fontSize: '20px',

        fontWeight:'300',
    },
    faqsubtitle: {
        fontSize: '25px',
        

    }
  }));
  

export default function Home(){
    const classes = useStyles()
    
    return (
    <span>
    <div style={{height: '92vh', minHeight: '800px'}}>
    <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
            <Link className={clsx(classes.title, classes.logo)} to="/">
                <Typography aria-label="Home" variant="h4">
                    <b style={{fontWeight: '900'}}>DonoCode</b>
                </Typography>
            </Link>
            <a className={classes.title} href="#howitworks">
                <Typography aria-label="Home" variant="h5">
                    How it Works
                </Typography>
            </a>
            <a className={classes.title} href="#faq">
                <Typography aria-label="Home" variant="h5">
                    FAQ
                </Typography>
            </a>
        </Toolbar>
    </AppBar>
    <div className={classes.hero}>
        <Typography variant="h3" className={classes.heroContent}><b style={{fontWeight: '800'}}>Track your impact<br/>with DonoCode!</b></Typography>
        <Link to="/dashboard" className={classes.signinlink}>
        <Button variant="contained" className={classes.login}><b>Create DonoCode</b></Button>
        </Link>
        <img src={homeImage} className={classes.image}/>
    </div>
    </div>
    <div className={classes.about} id="howitworks">
    <h2 className={classes.abouttitle}><b>How does DonoCode Work?</b></h2>
    <div className={classes.groupSet}>
        <div style={{width: '100vw',
        textAlign: 'center',
        display: 'grid',
        justifyContent: 'center',}}>
        <section className={classes.grid}>
        <div className={classes.width}>
        <img src={Stage1} className={classes.imageAbout}/>
        <h1 className={classes.titleAbout}>Create DonoCode</h1>
        <p className={classes.paraAbout}>Create any number of DonoCodes along with any personalized messages your want your recipients to receive.</p></div>
        <div className={classes.width}>
        <img src={Stage2} className={classes.imageAbout}/>
        <h1 className={classes.titleAbout}>Attach & Donate</h1>
        <p className={classes.paraAbout}>Attach your DonoCodes to your desired donation items, donate, and wait for a recipient to receive your donation! </p></div>
        <div className={classes.width}>
        <img src={Stage3} className={classes.imageAbout}/>
        <h1 className={classes.titleAbout}>Receive Updates</h1>
        <p className={classes.paraAbout}>Receive an update through text and on your “My Donations” dashboard once your donation has been recieved.</p></div>
        </section>
        </div>
    </div>
    </div>
    

    <div className={classes.faq} id="faq">

        <h2 style={{margin: '0', marginBottom: '40px', fontSize: '60px'}}><b>Frequently Asked Questions</b></h2>
        <h3 className={classes.faqsubtitle}>What donations can I use DonoCode with?</h3>
        <p className={classes.faqinfo}>DonoCode can be used with any type of donation! From clothing and household items to food and financial donations, any item can be tracked with DonoCode.</p>
        <h3 className={classes.faqsubtitle}>How will I receive a message when my donation item is received?</h3>
        <p className={classes.faqinfo}>When a donation item is received, the recipient will scan the DonoCode. The recipient will be able to view your personal message and an update that your donation has been received will be sent as a text to your number. The recipient may also send an optional thank you message along with the update. Your “My Donations” dashboard will automatically be updated with this status update.</p>
        <h3 className={classes.faqsubtitle}>Will my donation receipient still be able to message me muiltiple times?</h3>
        <p className={classes.faqinfo}>No. To avoid possible cases of unwanted spam messages, once a recipient scans a DonoCode, they will have one chance to send a message. Once they do so, DonoCode will no longer allow for messages to the donor. </p>
        <h3 className={classes.faqsubtitle}>Who created this really really really cool application?</h3>
        <p className={classes.faqinfo}>A group of 5 Vanderbilt sophomores got together for HackDuke and discovered an amazing idea that had not been created before. Wanting to encourage both donor and donation recipients alike, we created an application that would make giving donations a little bit more special :)</p>
    </div>
    
    
    </span>

    );
}
