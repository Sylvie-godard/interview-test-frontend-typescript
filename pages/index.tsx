import React from 'react';
import App from "../components/App";
import Head from "next/head";

const Home: React.FC<{}> = () => {
    return (

        <div className="container">
            <Head>
                <title>Easyblue: test frontend</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            </Head>
            <App/>
        </div>
    );
};

export default Home
