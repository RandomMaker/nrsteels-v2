import { Navbar, Footer, HomeHero } from "@components";
import React from "react";

export default function Home() {
    return (
        <React.Fragment>
            <Navbar />
            <HomeHero />
            <div style={{ height: "100vh" }}></div>
            <Footer />
        </React.Fragment>
    );
}
