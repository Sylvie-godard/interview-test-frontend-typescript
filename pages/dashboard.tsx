import React from 'react';
import Head from 'next/head'
import Title from '../components/Title';

const Home: React.FC<{}> = () => (
    <div className="container">
        <Head>
            <title>Dashboard ma gueule</title>
        </Head>

        <Title text="Dashboard ma gueule"/>
    </div>
);

export default Home
