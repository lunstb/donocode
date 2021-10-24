import React from 'react'
import { Link, useParams } from 'react-router-dom'

function DonorGreeting() {
    let [phone, setPhone] = React.useState('');
    let { qrId } = useParams();

    return (
        <div>
            <Link to="/signin"><button>Sign in</button></Link>
            Don't have an account? <Link to="/signup">Create one today.</Link>

            <input type="text" placeholder="Type phone number" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <Link to={{
                pathname: "/donor-add-sms",
                state: { 
                    qrId,
                    phone
                 }
            }}>
                <button>Next</button>
            </Link>
        </div>
    )
}

export default DonorGreeting
