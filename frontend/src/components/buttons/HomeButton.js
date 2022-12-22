import React from 'react';
import {NavLink} from "react-router-dom";

const HomeButton = () => {
    return (
        <div className={"homebutton"}>
            <NavLink to="/home">
                <li>Home</li>
            </NavLink>
        </div>
    );
};

export default HomeButton;