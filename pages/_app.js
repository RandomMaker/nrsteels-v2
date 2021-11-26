import { Navbar, Footer } from "@components";
import "@styles/global.css";
import React from "react";
import { useReveal } from "@hooks";

function App({ Component, pageProps }) {
    useReveal();
    return (
        <React.Fragment>
            <Navbar activePage={Component.activePage} />
            <Component {...pageProps} />
            <Footer />
        </React.Fragment>
    );
}

export default App;
