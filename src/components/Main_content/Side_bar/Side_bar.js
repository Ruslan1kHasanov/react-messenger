import React from 'react';
import './Side_bar.scss';
import Search_contact_field from './Search_contact_field/Search_contact_field';
import Contact from './Contact/Contact';
import shortid from 'shortid';

function Side_bar(props) {

    // let contacts_data = props.contacts.client_contacts;
    // console.log(contacts_data);

    // let client_contacts = contacts_data.map(contact => <Contact first_name = {contact.first_name} last_name = {contact.last_name} key={shortid.generate()}/>);

    //заменить shortid.generate() на уникальный id контакта

    return(
        <div className='side_bar_wrapper'>
            <Search_contact_field />
            <div className="contacts_field">
            {/* {client_contacts} */}
            </div>
            <div className="add_contact_btn"></div>
        </div>
    );

}

export default Side_bar;

