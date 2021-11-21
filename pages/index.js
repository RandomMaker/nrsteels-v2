import { Navbar, Footer, HomeHero } from "@components";
import { Pages } from "@enums";
import React from "react";
import styles from "./index.module.css";

export default function Home() {
    return (
        <React.Fragment>
            <HomeHero />
            {/* Brands we deal in */}
            <section>
                <h1 className={styles.sectionHeading}>
                    We offer solutions from the most trusted brands
                </h1>
            </section>
        </React.Fragment>
    );
}

Home.activePage = Pages.Home;
