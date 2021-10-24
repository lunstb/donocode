import { Link, useParams } from '@material-ui/core'
import React from 'react'

function RecipientGreeting() {
    let { qrId } = useParams();

    return (
        <div>
            <h1>A message has been sent to you!</h1>
            <p>Enter message here</p>
            <Link to="/recipient-add-sms"><button>Next</button></Link>
        </div>
    )
}

export default RecipientGreeting
