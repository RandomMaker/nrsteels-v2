import { Navbar, Footer, HomeHero } from "@components";
import { Pages } from "@enums";
import React from "react";
import styles from "./index.module.css";

export default function Home() {
    return (
        <React.Fragment>
            <HomeHero />
            {/* Brands we deal in */}
            <section className={styles.homeSection}>
                <h1 className={styles.sectionHeading}>Brands We Deal In</h1>
            </section>
        </React.Fragment>
    );
}

Home.activePage = Pages.Home;
