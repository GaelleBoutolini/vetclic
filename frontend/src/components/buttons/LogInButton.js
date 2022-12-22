import React from 'react';
import {NavLink} from "react-router-dom";
const LogInButton = () => {
    return (
        <div className={"loginbutton"}>
            <NavLink to="/login">
                <li>Login</li>
            </NavLink>
        </div>
    );
};
export default LogInButton;