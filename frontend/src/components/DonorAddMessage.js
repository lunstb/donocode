import React, {useState} from 'react'
import { useLocation } from 'react-router';

function DonorAddMessage() {
    let [message, setMessage] = useState('');
    let [name, setName] = useState('');
    let [isChecked, setIsChecked] = useState(false);
    const location = useLocation();
    const { qrId, phone } = location.state;

    const handleSend = () => {
        let body = {
            qrId, 
            account: null,
            phone,
            donorMessage: message,
        }
        try {
            fetch("/api/qr/donation/new-unlinked", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <p>Add an (optional) message for your donation recipient</p>
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)}/>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/>
            <button 
                disabled={!isChecked}
                onClick={handleSend}
            >
                Send</button>
        </div>
    )
}

export default DonorAddMessage
