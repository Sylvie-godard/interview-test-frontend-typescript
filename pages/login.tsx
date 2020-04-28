import React, {useState} from "react";
import Axios from "axios";
import Router from 'next/router';

const Login: React.FC<{}> = () => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    function handleSubmit(): void {
        console.log(username, password);
        Axios.post("http://localhost:3000/api/users", {
            username,
            password
        }).then( res => {
            if (res.status === 200) {
                Router.push('/');
            } else {
            }
        });
    }

    return (
        <div className='form-login'>
            <input type='identifiant'
                   value={username}
                   onChange={e => {
                       setUsername(e.target.value);
                   }}
                   placeholder='Adresse e-mail'
            />
                   <br/>
            <input
                type='password'
                value={password}
                onChange={e => {
                    setPassword(e.target.value);
                }}
                placeholder='Mot de passe'
            />
                <br/>
            <button className='connexion' onClick={handleSubmit}>CONNEXION</button><br/>
            <button className='mdp'>MOT DE PASSE OUBLIÉ</button>
        </div>
    );
};

export default Login;