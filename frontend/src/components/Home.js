import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Item, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Toolbar } from '@material-ui/core';
import clsx from 'clsx'
import homeImage from '../images/HomeTest.svg'
import processImage from '../images/Process.svg'
import Stage1 from '../images/Stage1.svg'
import Stage2 from '../images/Stage2.svg'
import Stage3 from '../images/Stage3.svg'


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
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
        textColor: 'black',
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
            width: '45em'
          },
        ['@media(max-width: 950px)'] : {
            
            position: 'relative',
            width: '0'
          },
        right: '10vh',
        bottom: '12vh',
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
        backgroundColor: 'white',
        ['@media(max-width: 950px)'] : {
            textAlign: 'center',
            height: 'auto'
          },
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
        fontSize: '40px',
        marginLeft: '10vh',
        paddingTop: '100px',
        ['@media(max-width: 950px)'] : {
            
            marginLeft: '0'
          },
    }
  }));
  

export default function Home(){
    const classes = useStyles()
    
    return (
    <span>
    <div style={{height: '92vh'}}>
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
        <Link to="/signin" className={classes.signinlink}>
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
        {/* <Grid container className={classes.grid}>
        <Grid item xs={2} sm={4} md={4}>
        <h2>Create DonoCode</h2>
        <p>Create any number of DonoCodes along with any personalized messages your want your recipients to receive.</p>
    </Grid>
    <Grid item xs={2} sm={4} md={4}>
    <h2>Donate</h2>
    <p>Attatch your DonoCodes to your desired donation items, donate, and wait for a recipient to receive your donation!</p>
    </Grid>
    <Grid item xs={2} sm={4} md={4}>
    <h2>Receive Updates</h2>
    <p>Receive an update through text and on your “My Donations” dashboard once your donation has been recieved.</p>
    </Grid>
        </Grid> */}
        </div>
    </div>
    </div>
    
    </span>

    );
}
