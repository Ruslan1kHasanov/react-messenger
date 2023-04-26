import React from 'react';
import './Burger_menu.scss';

let visibility_of_burger_menu = 'visible_menu';

export function show_hide_burger_menu() {
    visibility_of_burger_menu = (visibility_of_burger_menu === 'hidden_menu') ? 'visible_menu' : 'hidden_menu';
}

function Burger_menu(props) {

    //Реализовать смену классов (стилизацию) с помощью props

    return(
        <div className={"burger_menu_container noselect " + visibility_of_burger_menu}></div>
    )
}

export default Burger_menu;
