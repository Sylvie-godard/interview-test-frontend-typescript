import React from 'react';
import Head from 'next/head'
import Title from '../components/Title';
import Society from '../components/Society';
import Payment from "../components/Payment";
import RentReceipt from "../components/RentReceipt";
import LastActivities from "../components/LastActivities";

const Home: React.FC<{}> = () => {
    return (
        <div className="container">
            <Head>
                <title>Easyblue: test frontend</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Title text="Bienvenue sur votre espace personnel prénom !"/>
            <p className='text-center grey'>Retrouvez ci-dessous la liste es contrats auxquels vous avez souscrit.</p>
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
    );
};

export default Home
