import React from 'react';
import {NavLink} from "react-router-dom";

const SignUpButton = () => {
    return (
        <div className={"signupbutton"}>
            <NavLink to="/Register_Veto">
                <li>Register</li>
            </NavLink>
        </div>
    );
};

export default SignUpButton;