import { Navbar, Footer } from "@components";
import React from "react";
import WhatsappWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import "@styles/global.css";
import { useReveal } from "@hooks";

function App({ Component, pageProps }) {
    useReveal();
    return (
        <React.Fragment>
            <Navbar activePage={Component.activePage} />
            <Component {...pageProps} />
            <WhatsappWidget
                phoneNumber={"918072914370"}
                companyName={"Support NR Steels"}
            />
            <Footer />
        </React.Fragment>
    );
}

export default App;
