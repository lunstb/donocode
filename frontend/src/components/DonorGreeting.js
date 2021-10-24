import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Button, Item, Grid, Divider, Typography, Toolbar } from '@material-ui/core';
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
    trackImpact: {
        width: '90%', fontSize: '20px', textAlign: 'left',
        marginBottom: '60px',
        marginLeft: '30px'
    },
    signin: {
        border: '0 solid #9D8A8B',
        backgroundColor: '#d9af00',
        borderRadius: '5px',
        fontFamily: 'inherit',
        padding: "15px 70px",
        width: '90%',
        "&:hover": {
            cursor: "pointer",
            backgroundColor: '#e4c74c',
        },
        fontWeight: '800',
        fontSize: '20px',
         margin: '5px 0',
         fontColor: '#51323C'
    },
    register: {
        border: '0 solid #a0d6ff',
        fontColor: '#51323C',
        backgroundColor: '#e6e6e6',
        borderRadius: '5px',
        fontFamily: 'inherit',
        padding: "15px 70px",
        width: '90%',
        "&:hover": {
            cursor: "pointer",
            backgroundColor: '#dddddd',
        },
        fontWeight: '800',
        fontSize: '20px',
         margin: '5px 0'

    },
    input: {
        background: 'white',
        border: '1px solid #f0eded',
        borderRadius: '7px',
        padding: '20px 15px',
        width: '90%',
        margin: '15px 0',
        fontFamily: 'inherit',
        fontSize: '18px',
        ['@media(max-width: 950px)'] : {
            
            width: '90%',
          },
        
    },
    next: {
        marginTop: '20px',
        border: '0 solid #9D8A8B',
        backgroundColor: '#d9af00',
        borderRadius: '15px',
        fontFamily: 'inherit',
        padding: "10px 0",
        height: '60px',
        width: '150px',
        "&:hover": {
            cursor: "pointer",
            backgroundColor: '#e4c74c',
        },
        fontWeight: '800',
        fontSize: '20px',
        //  margin: '5px 0',
        textAlign: 'center',
         fontColor: '#51323C'
    }

}))

function DonorGreeting() {
    const classes = useStyles()
    let [phone, setPhone] = React.useState('');
    let { qrId } = useParams();

    return (
        <div style={{width: '100vw'}}>
        
    <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
            <Link className={clsx(classes.title, classes.logo)} to="/">
                <Typography aria-label="Home" variant="h4">
                    <b style={{fontWeight: '900'}}>DonoCode</b>
                </Typography>
            </Link>
        </Toolbar>
    </AppBar>

    <div style={{width: '100vw', textAlign: 'center',
        display: 'grid',
        justifyContent: 'center',}}>

    <div style={{color: '#51323C', textAlign: 'center', width: '100%'}}>

    <div className={classes.trackImpact}><h2 style={{padding: 'none', fontWeight: '900'}}><b style={{fontWeight: '800'}}> Track your impact with DonoCode!</b></h2></div>
        <Link to="/signin" style={{color: '#51323C'}}><button className={classes.signin}>Sign in</button></Link><br/>
        <Link to="/signup"><button className={classes.register}>Register</button></Link><br/>
        
        <h2 style={{ textAlign: 'center', margin: '40px 0'}}><b style={{fontWeight: '800', margin: '20px 0'}}>or</b></h2>
        <div style={{width: '90%', display: 'grid',
        justifyContent: 'center',}}>
        <p style={{width: '350px', color: "#51323C", textAlign: 'center', fontSize: '15px'}}>Enter your phone number to recieve a one-time update when your donation has been received!</p>

        </div>
                <input type="text" placeholder="Type phone number" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={classes.input}
                />
                <Link to={{
                    pathname: "/donor-add-sms",
                    state: { 
                        qrId,
                        phone
                    }
                }}><br/>
                    <button className={classes.next}>Next</button>
                </Link>
    </div>
    
    
    </div>
            
        </div>
    )
}

export default DonorGreeting
