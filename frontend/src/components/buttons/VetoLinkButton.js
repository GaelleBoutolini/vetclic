import React from 'react';
import {NavLink} from "react-router-dom";

const VetoLinkButton = () => {
    return (
        <div className="vetolinkbutton">
            <NavLink to="/veto">
                <li>Veto</li>
            </NavLink>
        </div>
    );
};
export default VetoLinkButton;