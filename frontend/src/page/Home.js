import React from 'react';
import Logo from '../components/Logo';
// import Navigation from '../components/Navigation';
import VetoLinkButton from "../components/buttons/VetoLinkButton";
import ClientLinkButton from "../components/buttons/ClientLinkButton";


const Home = () => {
    return (
        <div>
            <Logo />
            <h1>VetoClic</h1>
            <h3>Plus une minute à perdre, il suffit de clicquer.</h3>
            <br />
            <p>VetoClic est une plate-forme destinée à tous les vétérinaires qui souhaitent rentabiliser leur temps de travail... </p>
            <br />
            <VetoLinkButton />
            <ClientLinkButton />

        </div>
    );
};

export default Home;