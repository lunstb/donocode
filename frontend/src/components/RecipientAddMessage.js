import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
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



function RecipientAddMessage() {
    const classes = useStyles()
    let [boxChecked, setBoxChecked] = useState(false);
    let [message, setMessage] = useState('');
    const { qrId } = useParams();

    const handleSend = () => {
        let dateReceived = new Date();
        if (message) {
            fetch('api/qr/sendmessage/' + qrId, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message,
                })
            })  
        }

        fetch('/api/qr/register-receipt/' + qrId, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recipientMessage: message,
            })
        })
    }

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

    <div style={{color: '#51323C', textAlign: 'center', width: '300px'}}>
                <p>This donor has included a DonoCode to know when their donation is in someone’s hands (aka you!) Tap the check box below to let them know their donation has been received!</p>
           
                
            <div>
                <input type="checkbox"
                style={{background: 'transparent'}}
                    checked={boxChecked}
                    onChange={() => setBoxChecked(!boxChecked)}
                /><span style={{textAlign: 'left'}}>
                <label style={{color: '#51323C', textAlign: 'left'

}}>Let your donor know that this donation has been received.</label></span>
            </div>
            <h2>Add a thank you message!</h2>
            <div>
                <textarea value={message} style={{fontFamily: 'inherit'}}
                    onChange={(e) => setMessage(e.target.value)} name="message" maxlength="250" rows="10" cols="30" placeholder="Type your message here (250 character limit)."></textarea>
            </div>
            <button
            disabled={!boxChecked || message.length === 0}
            onClick={handleSend}
            className={classes.next}
            >Send</button>
             </div>
        </div>
        </div>
    )
}

export default RecipientAddMessage
