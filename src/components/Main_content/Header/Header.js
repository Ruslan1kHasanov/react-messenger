import React from 'react';
import './Header.scss';
import Contact_info_header from './Contact_info_header/Contact_info_header';
import Burger_menu_btn from './Burger_menu_btn/Burger_menu_btn';

function Header() {
    return(
        <div className="header">
            <div className="heaer_certiring_container">
                <h1 className="logo noselect">Chatted</h1>
            </div>
                <div className="contact_info_container">
                    <Contact_info_header/>
                </div>
                <Burger_menu_btn />
        </div>
    );
}

export default Header;