import React from 'react';
import './Contact.scss'

function Contact(props){
    return(
        <div className="contact_container noselect">
            <div className="contact_ava"></div>
            <div className="contact_name_container">
                <div className="contact_name">{props.first_name}</div>
                <div className="contact_lastname">{props.last_name}</div>
            </div>
        </div>
    );
}

export default Contact;