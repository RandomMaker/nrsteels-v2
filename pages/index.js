import { Navbar, Footer, HomeHero } from "@components";
import React from "react";

export default function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <div style={{ height: "1000vh" }}></div>
            <HomeHero />
            <Footer />
        </React.Fragment>
    );
}
