import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';


function RecipientAddMessage() {
    let [boxChecked, setBoxChecked] = useState(false);
    let [message, setMessage] = useState('');
    const location = useLocation();
    const { qrId } = location.state;


    const handleSend = () => {
        let dateReceived = new Date();
        if (message) {
            fetch('/qr/sendmessage/' + qrId, {
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
                dateReceived,
                recipientMessage: message,
            })
        })
    }

    return (
        <div>
            <div>
                <p>This donor has included a DonoCode to know when their donation is in someone’s hands (aka you!) Tap the check box below to let them know their donation has been receievd!</p>
            </div>
            <div>
                <input type="checkbox"
                    checked={boxChecked}
                    onChange={() => setBoxChecked(!boxChecked)}
                />
                <label>I have received my donation</label>
            </div>
            <div>
                <input type="textbox" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button
            disabled={!boxChecked || message.length === 0}
            onClick={handleSend}
            >Send</button>
        </div>
    )
}

export default RecipientAddMessage
