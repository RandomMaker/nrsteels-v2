import { Navbar, Footer } from "@components";
import "@styles/global.css";
import React from "react";

function App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Navbar activePage={Component.activePage} />
            <Component {...pageProps} />
            <Footer />
        </React.Fragment>
    );
}

export default App;
