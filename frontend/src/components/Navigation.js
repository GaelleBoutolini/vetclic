import React from 'react';
import { NavLink } from "react-router-dom";



//Ici, c'est un composant de navigation qui est codé une seule fois et il est appelé partout dans notre applicatio
const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
               <NavLink to="/veto">
                    <li>Veto</li>
                </NavLink>
                <NavLink to="/client">
                    <li>Client</li>
                </NavLink>
               
            </ul>

        </div>
    );
};

export default Navigation;