import { Link, useParams } from 'react-router-dom'
import React from 'react'

function RecipientGreeting() {
    let { qrId } = useParams();

    return (
        <div>
            <h1>A message has been sent to you!</h1>
            <p>Enter message here</p>
            <Link to={{
                pathname: "/recipient-add-sms",
                state: { qrId: qrId }
            }}>
                <button>Next</button>
            </Link>
        </div>
    )
}

export default RecipientGreeting
