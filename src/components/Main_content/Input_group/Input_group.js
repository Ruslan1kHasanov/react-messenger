import React from "react";
import './Input_group.scss';

function Input_gropup() {
    return(
        <div className="Input_group">
            <div id="attachment_btn" className="noselect"></div>
            <input type="text" id="message_input" className="noselect" placeholder="Message..."/>
            <div id="sending_btn" className="noselect"></div>
            {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
        </div>
    );
}

export default Input_gropup;