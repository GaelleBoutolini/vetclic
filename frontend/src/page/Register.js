import React from 'react';
import Logo from '../components/Logo';
import LogInButton from "../components/buttons/LogInButton";
import HomeButton from "../components/buttons/HomeButton";


const Register = () => {
    return (
        <div>
            <Logo/>
            <div>
                <h1>Please register</h1>
            </div>
            <div className='form'>
                <form action="" method="post">
                    <h4>Register</h4>
                    <div>
                        <label htmlFor="">first_name</label>
                        <input type="first_name"/></div>
                    <div>
                        <label htmlFor="">last_name</label>
                        <input type="last_name"/>
                    </div>
                    <div>
                        <label htmlFor="">email</label>
                        <input type="email"/>
                    </div>
                    <div>
                        <label htmlFor="">password</label>
                        <input type="password"/>
                    </div>
                    <div>
                        <label htmlFor="">phone_number</label>
                        <input type="phone_number"/></div>
                    <button>Sign up</button>

                </form>

            </div>
            <br/>
            <LogInButton/>
            <HomeButton/>

        </div>
    );
};

export default Register;