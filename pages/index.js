import { Navbar, Footer, HomeHero } from "@components";
import { Pages } from "@enums";
import React from "react";

export default function Home() {
    return (
        <React.Fragment>
            <HomeHero />
            <div style={{ height: "100vh" }}></div>
        </React.Fragment>
    );
}

Home.activePage = Pages.Home;
