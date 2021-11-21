import { HomeHero, CaptionHeading } from "@components";
import { Pages } from "@enums";
import { mx } from "@utils";
import React from "react";
import styles from "./index.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function RevealBlock({
    title,
    description,
    imgLink,
    imgLinkAlt,
    textLeft = true,
}) {
    const imagePart = (
        <div
            className={mx(
                styles.featuredImageContainer,
                styles.ipsGridSpan5,
                styles.gsReveal,
                textLeft ? styles.gsRevealFromRight : styles.gsRevealFromLeft
            )}
        >
            <div className={styles.card}>
                <img
                    width="479"
                    src={imgLink}
                    alt={imgLinkAlt}
                    className={styles.cardImg}
                />
            </div>
        </div>
    );

    const textPart = (
        <div
            className={mx(
                styles.ipsGridSpan7,
                textLeft ? styles.ipsTypeRight : styles.ipsTypeLeft
            )}
        >
            <h2 className={mx(styles.headingLarge, styles.gsReveal)}>
                {title}
            </h2>
            <p className={styles.gsReveal}>{description}</p>
        </div>
    );

    return (
        <div
            className={mx(
                styles.ipsGridCollapsePhone,
                styles.feature,
                styles.ipsSpacerBottomDouble,
                styles.ipsGrid
            )}
        >
            {textLeft ? (
                <>
                    {textPart}
                    {imagePart}
                </>
            ) : (
                <>
                    {imagePart}
                    {textPart}
                </>
            )}
        </div>
    );
}

const clienteleList = [
    {
        name: "Tata Steels",
        img: "https://www.cubiks.com/sites/default/files/styles/bp_card_image/public/tata_00000.png?itok=9q_314Wj",
    },
    {
        name: "Adani Ports and Logistics",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Adani_Ports_Logo.svg/1200px-Adani_Ports_Logo.svg.png",
    },
    {
        name: "Keller",
        img: "https://logos-download.com/wp-content/uploads/2020/06/Keller_Group_Plc_Logo.png",
    },
    {
        name: "BEML",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Bharat_Earth_Movers_Logo.svg/1200px-Bharat_Earth_Movers_Logo.svg.png",
    },
    {
        name: "Sical",
        img: "http://www.idfc.com/alternatives/images/sical_big_img.jpg",
    },
    {
        name: "Reliance Industries Ltd.",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Reliance_Industries_Logo.svg/1200px-Reliance_Industries_Logo.svg.png",
    },
];

export default function Home() {
    const hide = (elem) => {
        gsap.set(elem, { autoAlpha: 0 });
    };

    const animateFrom = (elem, direction) => {
        direction = direction || 1;
        var x = 0,
            y = direction * 100;
        if (elem.classList.contains(styles.gsRevealFromLeft)) {
            x = -100;
            y = 0;
        } else if (elem.classList.contains(styles.gsRevealFromRight)) {
            x = 100;
            y = 0;
        }
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(
            elem,
            { x: x, y: y, autoAlpha: 0 },
            {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: "expo",
                overwrite: "auto",
            }
        );
    };

    useEffect(() => {
        gsap.utils.toArray(`.${styles.gsReveal}`).forEach(function (elem) {
            hide(elem); // assure that the element is hidden when scrolled into view

            ScrollTrigger.create({
                trigger: elem,
                onEnter: function () {
                    animateFrom(elem);
                },
                onEnterBack: function () {
                    animateFrom(elem, -1);
                },
                onLeave: function () {
                    hide(elem);
                }, // assure that the element is hidden when scrolled into view
                onLeaveBack: function () {
                    hide(elem);
                },
            });
        });
    }, []);

    return (
        <React.Fragment>
            {/* Home Page Hero Section */}
            <HomeHero />
            {/* Brands we deal in */}
            <section className={mx(styles.homeSection)}>
                <div className={styles.cInnerContent}>
                    <CaptionHeading
                        title="Brands We Deal In"
                        caption={"Hamari Pahuch"}
                        titleClassName={mx(
                            styles.sectionHeading,
                            styles.gsReveal,
                            styles.ipsTypeCenter
                        )}
                    />

                    <RevealBlock
                        title="Tiger Lifting"
                        description="Tiger Lifting is a company that
                                lifts tigers xD. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit. Rerum,
                                quam deserunt accusantium architecto,
                                molestias voluptates sequi repellendus alias
                                ipsam nulla fuga deleniti maxime vero at
                                labore modi natus velit maiores. Lorem ipsum
                                dolor sit, amet consectetur adipisicing
                                elit. Repudiandae iusto nostrum itaque
                                maxime quam optio, voluptate minima
                                praesentium, at ea necessitatibus quidem?
                                Odio exercitationem iure explicabo
                                commodi molestias eius repellendus."
                        imgLink={
                            "https://www.tigerlifting.com/media/d1idryvp/tiger-lifting-logo.png?width=479&height=479"
                        }
                        textLeft={false}
                    />

                    <RevealBlock
                        title="Kiswire Wire Rope"
                        description="Kiswire Ropes is a wire rope company that
                                    creates wires xD. Lorem ipsum dolor sit
                                    amet, consectetur adipisicing elit. Rerum,
                                    quam deserunt accusantium architecto,
                                    molestias voluptates sequi repellendus alias
                                    ipsam nulla fuga deleniti maxime vero at
                                    labore modi natus velit maiores. Lorem ipsum
                                    dolor sit, amet consectetur adipisicing
                                    elit. Repudiandae iusto nostrum itaque
                                    maxime quam optio, voluptate minima
                                    praesentium, at ea necessitatibus quidem?
                                    Odio exercitationem iure explicabo commodi
                                    molestias eius repellendus. Fugiat corporis
                                    quod voluptate eos. Odio blanditiis
                                    reiciendis aperiam. Unde ut soluta obcaecati
                                    deleniti vero iure, fugiat voluptatum
                                    repellat eos!"
                        imgLink={
                            "https://lifting.com/wp-content/uploads/2015/08/kiswire.jpg"
                        }
                        textLeft={true}
                    />

                    <RevealBlock
                        title="Haulmaster"
                        description="Haulmaster is a parts making company xD.
                                    amet, consectetur adipisicing elit. Rerum,
                                    quam deserunt accusantium architecto,
                                    molestias voluptates sequi repellendus alias
                                    ipsam nulla fuga deleniti maxime vero at
                                    labore modi natus velit maiores. Lorem ipsum
                                    dolor sit, amet consectetur adipisicing
                                    elit. Repudiandae iusto nostrum itaque
                                    maxime quam optio, voluptate minima
                                    praesentium, at ea necessitatibus quidem?
                                    Odio exercitationem iure explicabo commodi
                                    molestias eius repellendus. Fugiat corporis
                                    quod voluptate eos."
                        imgLink={
                            "https://elmersmfg.com/wp-content/uploads/2018/11/haulmaster-menu.jpg"
                        }
                        textLeft={false}
                    />
                </div>
            </section>
            <section
                className={mx(styles.homeSection, styles.clienteleSection)}
            >
                <CaptionHeading
                    title="Compaines that trust us"
                    caption={"Our Clientele"}
                    titleClassName={mx(
                        styles.sectionHeading,
                        styles.gsReveal,
                        styles.ipsTypeCenter
                    )}
                />
                <div
                    className={mx(
                        styles.clienteleListContainer,
                        styles.cInnerContent
                    )}
                >
                    {clienteleList.map((item) => {
                        return (
                            <img
                                src={item.img}
                                alt={item.name}
                                className={mx(
                                    styles.clienteleItemImg,
                                    styles.gsReveal
                                )}
                            />
                        );
                    })}
                </div>
                <div className={styles.productNavButtonContainer}>
                    <Link href={Pages.ProductsRange}>
                        <a className={styles.productNavButton}>View All</a>
                    </Link>
                </div>
            </section>
        </React.Fragment>
    );
}

Home.activePage = Pages.Home;
