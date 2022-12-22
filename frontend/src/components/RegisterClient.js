import React from "react";
import { NavLink} from "react-router-dom";



const RegisterClient = () => {
    return (
        <div className="registerClient">
            <ul>

                <NavLink to="/register">
                    <li>Register</li>
                </NavLink>
                <NavLink to="/login">
                    <li>Login</li>
                </NavLink>
                <NavLink to="/home">
                    <li>Home</li>
                </NavLink>


            </ul>

        </div>
    );
};

export default RegisterClient;