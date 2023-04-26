import React from 'react';
import './Contact_info_header.scss';

function Contact_info_header(props) {

    return(
        <div className="contact_info_header noselect">
            <div className="contact_profile_ava"></div>
            <div className="contact_profile_name_container">
                <div className="contact_profile_name">Ksenya</div>
                <div className="contact_profile_lastname">Doroshenko</div>
            </div>
        </div>
    );
}

export default Contact_info_header;