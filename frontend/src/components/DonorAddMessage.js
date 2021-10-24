import React, {useState} from 'react'

function DonorAddMessage() {
    let [message, setMessage] = useState('');
    let [name, setName] = useState('');
    let [isChecked, setIsChecked] = useState(false);

    const handleSend = () => {
        // todo: send message
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
