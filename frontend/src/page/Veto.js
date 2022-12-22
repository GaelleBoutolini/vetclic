import React from 'react';
import Logo from '../components/Logo';
import Identification from '../components/Identification';
import LogInButton from "../components/buttons/LogInButton";
import SignUpButton from "../components/buttons/SignUpButton";
import HomeButton from "../components/buttons/HomeButton";

const Veto = () => {
    return (
        <div>
            <Logo />
            <h1>Hello Veto</h1>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla debitis consectetur repellendus in minima.</h3>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum inventore, ad quo quis fugiat atque perferendis!</p>
            <br />
            <LogInButton />
            <SignUpButton />
            <HomeButton />"

        </div>
    );
};

export default Veto;