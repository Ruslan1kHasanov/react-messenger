import React from "react";
import './Burger_menu_btn.scss';
import Burger_menu from './Burger_menu/Burger_menu';
import { show_hide_burger_menu } from "./Burger_menu/Burger_menu";

function Burger_menu_btn() {
    return(
        <div className="profile_menu_burger_wrapper">
            <div className="profile_menu_burger" onClick={show_hide_burger_menu}>
                <div className="profile_menu_burger_btn"></div>
            </div>
            <div className="burger_menu_holder">
                        <Burger_menu />
            </div>
         </div>
    )
}

export default Burger_menu_btn;