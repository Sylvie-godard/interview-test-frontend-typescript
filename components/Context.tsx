import React, { createContext, useState, useContext } from "react";
import cogoToast from 'cogo-toast';
import Router from "next/router";

const LocalStateContext = createContext(null);
const LocalStateProvider = LocalStateContext.Provider;

interface userData {
    username: string;
    isLogin: boolean;
}

const AppProvider: React.FC<{}> = ({ children }) => {
    const [user, setUser] = useState({username: '', isLogin: false});

    const userLogin = (data: userData) => {
        setUser(data);

        if (data.isLogin) {
            Router.push('/');
            cogoToast.success('Super ! Vous êtes connecté :)');
        } else {
            cogoToast.error('Mince ! Vous avez oublié vos identifiants  :(');
        }
    };

    const isLogin = () => {
        if (user.isLogin) {
            Router.push('/');
        } else {
            Router.push('/login');
        }
    };

    return (
        <LocalStateProvider
            value={{
                userLogin,
                user,
                isLogin
            }}
        >
            {children}
        </LocalStateProvider>
    );
};

const useInfos = () => {
    return useContext(LocalStateContext);
};

export { AppProvider, useInfos };
