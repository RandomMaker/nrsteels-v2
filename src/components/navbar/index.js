import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import { mx } from "@utils";
import { Pages } from "@enums";

import styles from "./index.module.css";

const links = {
    Home: Pages.Home,
    "About Us": Pages.AboutUs,
    "Products Range": Pages.ProductsRange,
    Contact: Pages.Contact,
};

export default function Navbar({ activePage }) {
    const navMenuRef = useRef();
    const hamburgerRef = useRef();

    const [navsticky, setNavsticky] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                setNavsticky(true);
            } else {
                setNavsticky(false);
            }
        });
    }, []);

    const handleHamburgerClick = () => {
        hamburgerRef.current.classList.toggle(styles.active);
        navMenuRef.current.classList.toggle(styles.active);
    };

    const closeHamburger = () => {
        hamburgerRef.current.classList.remove(styles.active);
        navMenuRef.current.classList.remove(styles.active);
    };

    const navLinks = Object.keys(links).map((key) => {
        return (
            <li className={styles.navItem} key={key}>
                <Link href={links[key]}>
                    <a
                        onClick={(ev) => {
                            closeHamburger();
                        }}
                        className={mx(
                            styles.navLink,
                            (links[key] == activePage &&
                                styles.activeNavLink) ||
                                ""
                        )}
                    >
                        {key}
                    </a>
                </Link>
            </li>
        );
    });

    return (
        <div
            className={mx(
                styles.navbarHeader,
                (navsticky && styles.stickyNavbar) || ""
            )}
        >
            <nav className={styles.navbar}>
                <Link href={Pages.Home} passHref>
                    <span className={styles.logo}>
                        <Image
                            src="/logo-black.png"
                            height="80"
                            width="80"
                            objectFit="cover"
                        />
                        <a href="/">N.R. Steels</a>
                    </span>
                </Link>
                <ul ref={navMenuRef} className={styles.navMenu}>
                    {navLinks}
                </ul>
                <div
                    className={styles.hamburger}
                    ref={hamburgerRef}
                    onClick={(ev) => handleHamburgerClick(ev)}
                >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </div>
            </nav>
        </div>
    );
}
