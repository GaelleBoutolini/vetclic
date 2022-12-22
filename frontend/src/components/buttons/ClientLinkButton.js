import React from 'react';
import {NavLink} from "react-router-dom";

const ClientLinkButton = () => {
    return (
        <div className={"clientlinkbutton"}>
            <NavLink to="/client">
                <li>Client</li>
            </NavLink>
        </div>
    );
};

export default ClientLinkButton;