import React from 'react';

interface Props {

}

const Login: React.FC<Props> = () => (
    <div className='test'>
        <input type='identifiant' placeholder='Adresse e-mail'/><br/>
        <input type='password' placeholder='Mot de passe'/><br/>
        <button className='connexion'>CONNEXION</button><br/>
        <button className='mdp'>MOT DE PASSE OUBLIÉ</button>
    </div>
);

export default Login;