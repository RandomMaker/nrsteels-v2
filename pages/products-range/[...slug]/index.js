import { getMarketDetails, getMarkets } from "@client";
import { CaptionHeading, SimpleHero } from "@components";
import { Pages } from "@enums";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

import { mx } from "@utils";
import globalStyles from "@styles/global.module.css";

const branch = {
    name: "Underground Mining",
    caption: "Premium Quality",
    description:
        "Lorem ipsum sit dolor contra voila bolario sono matro kokaneionan armei voila cora bolatro mainia filario coastania",
    products: [],
};

function Product({ imgSrc, title, description }) {
    return (
        <div className={styles.productContainer}>
            <Image
                src={imgSrc}
                width={350}
                height={300}
                layout="fixed"
                className={styles.productImage}
            />
            <div className={styles.productDescription}>
                <h5 className={styles.productTitle}>{title}</h5>
                <p className="text-md">{description}</p>
                <Link href={"/"}>
                    <a className={mx(globalStyles.btnLink, styles.productLink)}>
                        View Products
                    </a>
                </Link>
            </div>
        </div>
    );
}

// CatchyDescription -> Text that will be dangerously set
// SectionHeading -> { title, caption }
// SectionDescriptionLine -> Text that will be dangerously set
// ProductsRangeHeading -> title
// Products -> list of products

/*
    {
        name: "Excavator Components",
        classes: [
            {
                name: 'Bucket Teeth',
                img: "boll.jpg",
                description: "excavator_tooth.jpg",
                link: ""
            },
            {
                name: 'Adapters',
                img: "boll.jpg",
                description: "",
                link: ""
            },
            {
                name: 'Side Cutters',
                img: "boll.jpg",
                description: "",
                link: ""
            },
            {
                name: "Scarifier",
                img: "scarifier.jpg",
                description: "",
                link: ""
            }

        ]
    }

*/

export default function ProductsListPage({ market }) {
    return (
        <React.Fragment>
            <SimpleHero imgLink={market.imgSrc} title={market.name} />
            <h3 className={styles.mainDescriptionLine}>{market.description}</h3>
            <section className={styles.section}>
                <CaptionHeading
                    title={branch.name}
                    caption={branch.caption}
                    titleClassName={mx(styles.sectionHeading)}
                />
                <h3 className={styles.sectionDescriptionLine}>
                    {branch.description}
                </h3>
                <div className={styles.sectionContent}>
                    <hr className={styles.productsSectionDivider} />
                    {/* Buckets Section */}
                    <div className={styles.productsSection}>
                        <h4 className={styles.productsSectionTitle}>
                            Excavator Bucket Components
                        </h4>
                        <div className={styles.productsListContainer}>
                            <Product
                                imgSrc={
                                    "/images/products/classes/excavator_tooth.jpg"
                                }
                                title={"Tooth"}
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                            <Product
                                imgSrc={
                                    "/images/products/classes/excavator_adapter.jpg"
                                }
                                title={"Adapter"}
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                            />
                            <Product
                                imgSrc={
                                    "/images/products/classes/excavator_sidecutter.jpg"
                                }
                                title={"Side Cutter"}
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                            />
                            <Product
                                imgSrc={
                                    "/images/products/classes/excavator_scarifier.jpg"
                                }
                                title={"Scarifier"}
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                            />
                        </div>
                    </div>
                    <hr className={styles.productsSectionDivider} />
                    {/* Undercarriage Section */}
                    <div className={styles.productsSection}>
                        <h4 className={styles.productsSectionTitle}>
                            Excavator Undercarriage Components
                        </h4>
                        <div className={styles.productsListContainer}>
                            <Product
                                imgSrc={
                                    "/images/products/classes/excavator_rollers.jpg"
                                }
                                title={"Rollers"}
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                            />
                            <Product
                                imgSrc={
                                    "/images/products/classes/excavator_trackshoes.jpg"
                                }
                                title={"Track Shoes"}
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                            />
                            <Product
                                imgSrc={
                                    "/images/products/classes/excavator_idlers.jpg"
                                }
                                title={"Idlers"}
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                            />
                            <Product
                                imgSrc={
                                    "/images/products/classes/excavator_trackchains.jpg"
                                }
                                title={"Track Chains"}
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                            />
                            <Product
                                imgSrc={
                                    "/images/products/classes/excavator_drivesprockets.jpg"
                                }
                                title={"Drive Sprockets"}
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export async function getStaticProps(context) {
    const marketDetail = getMarketDetails(context.params.slug[0]);
    return {
        props: { market: marketDetail },
    };
}

export async function getStaticPaths() {
    const paths = getMarkets().map((mrkt) => ({
        params: { slug: [mrkt.slug] },
    }));

    return {
        paths: paths,
        fallback: false,
    };
}

ProductsListPage.activePage = Pages.ProductsRange;
