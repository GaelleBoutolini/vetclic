import React from 'react';
import Logo from '../components/Logo';
import Identification from '../components/Identification';
import LogInButton from "../components/buttons/LogInButton";
import SignUpButton from "../components/buttons/SignUpButton";
import HomeButton from "../components/buttons/HomeButton";

const Login = () => {
    return (
        <div>
            <Logo/>
            <div>
                <h1>Please login</h1>
            </div>
            <div className='form'>

                <form action="" method="post">
                    <h4>Login</h4>
                    <div>
                        <label htmlFor="">email</label>
                        <input type="email"/>
                    </div>
                    <div>
                        <label htmlFor="">password</label>
                        <input type="password"/>
                    </div>
                    <button>Sign in</button>
                    <button>Password forgotten?</button>

                </form>
            </div>
            <br/>
            <SignUpButton/>
            <HomeButton/>
        </div>
    );
};

export default Login;