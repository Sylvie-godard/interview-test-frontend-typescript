import React, {useEffect} from 'react';
import Head from 'next/head'
import Title from './Title';
import Society from './Society';
import Payment from "./Payment";
import RentReceipt from "./RentReceipt";
import LastActivities from "./LastActivities";
import NavBar from "./NavBar";
import {useInfos} from "./Context";
import Router from "next/router";

const App: React.FC<{}> = () => {
    const {isLogin} = useInfos();

    useEffect(() => {
        if (!isLogin) {
            Router.push('/login')
        } else {
            document.body.style.backgroundImage = 'none';
            document.body.style.backgroundRepeat = 'none';
            document.body.style.backgroundSize = 'none';
            document.body.style.backgroundPosition = 'none';
            document.body.style.backgroundColor = '#f3f3f3';
        }
    }, []);

    return <div>
        <NavBar/>
        <div className="container">
            <Head>
                <title>Easyblue: test frontend</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            </Head>
            <Title text="Bienvenue sur votre espace personnel prénom !"/>
            <p className='text-center grey'>
                Retrouvez ci-dessous la liste es contrats auxquels vous avez souscrit.
            </p>
            <div className='dashboard'>
                <div>
                    <Society/>
                    <Payment/>
                    <RentReceipt/>
                </div>
                <div>
                    <LastActivities/>
                </div>
            </div>
        </div>
    </div>;
};

export default App
