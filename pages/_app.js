import React from "react";
import '../style.css';
import { AppProvider } from '../components/Context';

export default function MyApp({ Component, pageProps }) {
    return  <AppProvider>
        <Component {...pageProps} />
    </AppProvider>

}
