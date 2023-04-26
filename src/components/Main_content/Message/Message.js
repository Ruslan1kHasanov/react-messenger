import React from "react";
import './Message.scss';

function Message(props) {

    let message = props.state;
    
    // console.log(props);

    return(
        <>
        <div className={message.type_of_message + ' message_container noselect'}>
            <div className="message_bubble">
                <div className="message_sender">{message.name}</div>
                <div className="message_text_container"><span>{message.message_text}</span></div>
                <div className="dottom_information_wrapper">
                    <div className="time_of_sending">{message.time_of_sending}</div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Message;