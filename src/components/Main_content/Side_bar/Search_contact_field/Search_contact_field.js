import React from 'react';
import './Search_contact_field.scss';

function search_contact_input() {
    return(
        <div className='search_contact_wrapper'>
            <div className="search_contact_input_wrapper">
                <input type="text" placeholder='Search' id='search_contact_input' className='noselect'/>
                <div className='search_contact_btn'></div>
            </div>
        </div>
    );
}

export default search_contact_input;