import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar: React.FC<{}> = () => {
    return (
        <div className='navBar'>
            <MenuIcon />
            <img src='/img/icons/logo.svg' alt='logo'/>
            <p/>
        </div>
    )
};

export default NavBar;
