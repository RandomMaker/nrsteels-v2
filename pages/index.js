import { CaptionHeading, HomeHero } from "@components";
import { Pages } from "@enums";
import globalStyles from "@styles/global.module.css";
import { mx } from "@utils";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";

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
                globalStyles.gsReveal,
                textLeft
                    ? globalStyles.gsRevealFromRight
                    : globalStyles.gsRevealFromLeft
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
            <h2 className={mx(styles.headingLarge, globalStyles.gsReveal)}>
                {title}
            </h2>
            <p className={globalStyles.gsReveal}>{description}</p>
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
    return (
        <React.Fragment>
            {/* Hero Section */}
            <HomeHero />
            {/* About Us Section */}
            <section className={mx(styles.homeSection, styles.aboutUsSection)}>
                <div className={styles.aboutUsContainer}>
                    <CaptionHeading
                        title="About Us"
                        caption="who we are"
                        titleClassName={mx(
                            styles.sectionHeading,
                            globalStyles.gsReveal,
                            styles.ipsTypeCenter
                        )}
                    />
                    <div
                        className={mx(
                            "text-center text-xl md:text-2xl",
                            globalStyles.gsReveal
                        )}
                    >
                        <p className={"mb-2"}>
                            Established in 1976, <strong>N.R Steels</strong> has
                            made a well-recognized name as a manufacturer,
                            wholesaler and trader of Wire Rope Slings, Wire
                            Rope, Bow Shackle. We have achieved expertise in
                            catering to the requirements of our clients exactly
                            as per their specifications. We emphasize on
                            stringent quality standards in order to ensure that
                            the products provided to our clients is always
                            optimum to its level.
                        </p>
                        <p>
                            Over the years of our operation, we have registered
                            consistent growth rate under the insightful guidance
                            of our mentor <strong>Mr. Sarthak Jain</strong>.
                        </p>
                    </div>
                </div>
            </section>
            {/* Brands we deal in */}
            <section className={mx(styles.homeSection, styles.brandsSection)}>
                <div className={styles.cInnerContent}>
                    <CaptionHeading
                        title="Brands We Deal In"
                        caption={"Hamari Pahuch"}
                        titleClassName={mx(
                            styles.sectionHeading,
                            globalStyles.gsReveal,
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
                                labore modi natus velit maiores."
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
                                    elit."
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
                                    labore modi natus velit maiores"
                        imgLink={
                            "https://elmersmfg.com/wp-content/uploads/2018/11/haulmaster-menu.jpg"
                        }
                        textLeft={false}
                    />
                </div>
            </section>
            {/* Clientele Section */}
            <section
                className={mx(styles.homeSection, styles.clienteleSection)}
            >
                <CaptionHeading
                    title="Compaines that trust us"
                    caption={"Our Clientele"}
                    titleClassName={mx(
                        styles.sectionHeading,
                        globalStyles.gsReveal,
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
                                    globalStyles.gsReveal
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
