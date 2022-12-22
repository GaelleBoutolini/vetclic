import React, {useState} from 'react';
import Logo from '../components/Logo';
import LogInButton from "../components/buttons/LogInButton";

const Register_Veto = () => {
    const [signup, setSignup] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_number: "",
        siret: "",
    })

    const done = () => {
        
        fetch("http://localhost:8000/api/vet/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: "cors",
            body: JSON.stringify(signup),
        })
            .then((response) => {
                if (response.status === 201){
                    alert("You have a registered account, dashboard comming soon!!")
                } else if (response.status === 400){
                    alert("Keep trying something is off!!")
                }
            } )
            .then((data) => {
                console.log('Success:', data);
                              
            })
            .catch((error) => {
                console.error('Error:', error);
                
            });
    }


    return (
        <div>
            <Logo/>
            <div>
                <h1>Please register</h1>
            </div>
            <div className='form'>
                <div>
                    <div>
                        <label htmlFor="first_name">First Name :</label>
                        <input type="text" name={"first_name"} id={"first_name"} onChange={e => setSignup({
                            ...signup, first_name: e.target.value,
                        })}/>
                        <div>
                            <label htmlFor="last_name">Last Name :</label>
                            <input type="text" name={"last_name"} id={"last_name"} onChange={e => setSignup({
                                ...signup, last_name: e.target.value,
                            })}/>
                        </div>
                        <div>
                            <label htmlFor="email">Email :</label>
                            <input type="email" name={"email"} id={"email"} onChange={e => setSignup({
                                ...signup, email: e.target.value,
                            })
                            }/>
                        </div>
                        <div>
                            <label htmlFor="password">Password :</label>
                            <input type="password" name={"password"} id={"password"} onChange={e => setSignup({
                                ...signup, password: e.target.value,
                            })
                            }/>
                        </div>
                        <div>
                            <label htmlFor="phone_number">Phone Number :</label>
                            <input type="tel" name={"phone_number"} id={"phone_number"} onChange={e => setSignup({
                                ...signup, phone_number: e.target.value,
                            })}/></div>
                        <div>
                            <label htmlFor="siret">Siret :</label>
                            <input type="text" name={"siret"} id={"siret"} onChange={e => setSignup({
                                ...signup, siret: e.target.value,
                            })}/></div>
                        <button onClick={done}>Sign up veto</button>
                    </div>
                </div>
            </div>
            <LogInButton/>
        </div>
    );
};

export default Register_Veto;