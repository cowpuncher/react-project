import React, { useState } from 'react';

function FormMessage(props) {
    let [message, setMessage] = useState('');

    const returnMessage = () => {
        return message;
    }

    return (
        <div className="formMessage">
            <form>
                <textarea onChange={(event) => setMessage(message = event.target.value)} />
                <button type="button" onClick={() => returnMessage}>Send</button>
            </form>
        </div>
    );
}

export default FormMessage;