import { getMarketDetails, getMarkets, getProductClassLink } from "@client";
import { CaptionHeading, SimpleHero } from "@components";
import { Pages } from "@enums";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

import { mx } from "@utils";
import globalStyles from "@styles/global.module.css";

function ProductClass({ imgSrc, title, description, link }) {
    return (
        <div className={mx(styles.productContainer, globalStyles.gsReveal)}>
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
                <Link href={link}>
                    <a className={mx(globalStyles.btnLink, styles.productLink)}>
                        View Products
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default function ProductsListPage({ market }) {
    return (
        <React.Fragment>
            <SimpleHero imgLink={market.imgSrc} title={market.name} />
            <h3
                className={mx(
                    styles.mainDescriptionLine,
                    globalStyles.gsReveal
                )}
            >
                {market.description}
            </h3>
            {market?.branches.map((branch) => {
                return (
                    <section className={styles.section} key={branch.slug}>
                        <CaptionHeading
                            title={branch.name}
                            caption={branch.caption}
                            titleClassName={mx(
                                styles.sectionHeading,
                                globalStyles.gsReveal
                            )}
                        />
                        <h3
                            className={mx(
                                styles.sectionDescriptionLine,
                                globalStyles.gsReveal
                            )}
                        >
                            {branch.description}
                        </h3>
                        <div className={styles.sectionContent}>
                            {branch.categories.map((category) => {
                                return (
                                    <React.Fragment key={category.slug}>
                                        <hr
                                            className={
                                                styles.productsSectionDivider
                                            }
                                        />
                                        <div className={styles.productsSection}>
                                            <h4
                                                className={mx(
                                                    styles.productsSectionTitle,
                                                    globalStyles.gsReveal
                                                )}
                                            >
                                                {category.name}
                                            </h4>
                                            <div
                                                className={
                                                    styles.productsListContainer
                                                }
                                            >
                                                {category.productClasses.map(
                                                    (productClass) => {
                                                        return (
                                                            <ProductClass
                                                                key={
                                                                    productClass.slug
                                                                }
                                                                imgSrc={
                                                                    productClass.imgSrc
                                                                }
                                                                title={
                                                                    productClass.name
                                                                }
                                                                description={
                                                                    productClass.description
                                                                }
                                                                link={getProductClassLink(
                                                                    market.link,
                                                                    branch.link,
                                                                    category.link,
                                                                    productClass.link
                                                                )}
                                                            />
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </section>
                );
            })}
        </React.Fragment>
    );
}

export async function getStaticProps(context) {
    const marketDetail = getMarketDetails(context.params.sector);

    return {
        props: { market: marketDetail },
    };
}

export async function getStaticPaths() {
    const paths = getMarkets().map((mrkt) => ({
        params: { sector: mrkt.slug },
    }));

    return {
        paths: paths,
        fallback: false,
    };
}

ProductsListPage.activePage = Pages.ProductsRange;
