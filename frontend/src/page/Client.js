import React from 'react';
import Logo from '../components/Logo';
import RegisterClient from '../components/RegisterClient';

const Client = () => {
    return (
        <div>
            <Logo />
            <h1>Hello Client</h1>
            <br />
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, eveniet!</h3>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla debitis consectetur repellendus in minima, voluptas dolore rerum iusto incidunt ullam.</p>
            <br />
            <RegisterClient />
        </div>
    );
};

export default Client;