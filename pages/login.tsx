import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import { useInfos } from '../components/Context';

const Login: React.FC<{}> = () => {
    const { userLogin } = useInfos();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        document.body.style.backgroundImage = 'url(/img/icons/sand.png), url(/img/icons/henry-chill.png), url(/img/icons/buoy.png)';
        document.body.style.backgroundRepeat = 'no-repeat, no-repeat, no-repeat';
        document.body.style.backgroundSize = '30rem, 15rem, 10rem';
        document.body.style.backgroundPosition = 'left top, right center, left bottom';
        document.body.style.backgroundColor = 'blue';
    }, []);

    function handleSubmit() {console.log(username, password);
        Axios.post("http://localhost:3000/api/users", {
            username,
            password
        }).then( res => {
            if (res.status === 200) {
                userLogin(true);
            }
        }).catch(() => {
            userLogin(false);
        })
    }

    function submit(event: React.KeyboardEvent){
        if(event.key === 'Enter'){
            handleSubmit();
        }
    }

    return (
            <div className='form-login'>
                <img src='/img/icons/logo.svg' alt='logo'/><br/>
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
                    onKeyPress={submit}
                />
                <br/>
                <button className='connexion' onClick={handleSubmit}>CONNEXION</button><br/>
                <button className='mdp'>MOT DE PASSE OUBLIÉ</button>
            </div>
    );
};

export default Login;