import React, { createContext, useState, useContext } from "react";
import cogoToast from 'cogo-toast';
import Router from "next/router";
import { setCookie } from 'nookies';

const LocalStateContext = createContext(null);
const LocalStateProvider = LocalStateContext.Provider;

const AppProvider: React.FC<{}> = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    const userLogin = (data: boolean) => {
        setIsLogin(data);

        if (data) {
            setCookie(null, 'fromClientSide', 'isLogin', {
                maxAge: 30 * 24 * 60 * 60,
                path: '/',
            });
            Router.push('/');
            cogoToast.success('Super ! Vous êtes connecté :)');
        } else {
            cogoToast.error('Mince ! Vous avez oublié vos identifiants  :(');
        }
    };

    return (
        <LocalStateProvider
            value={{
                userLogin,
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
