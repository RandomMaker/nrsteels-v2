import { getMarketDetails, getMarkets } from "@client";
import { CaptionHeading, SimpleHero } from "@components";
import { Pages } from "@enums";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

import { mx } from "@utils";
import globalStyles from "@styles/global.module.css";

const branch = {
    name: "Marble Mining",
    caption: "Our Speciality",
    description:
        "Lorem ipsum sit dolor contra voila bolario sono matro kokaneionan armei voila cora bolatro mainia filario coastania",
    products: [],
};

function Product({ imgSrc }) {
    return (
        <div className={styles.productContainer}>
            <Image
                src={imgSrc}
                width={330}
                height={280}
                layout="fixed"
                className={styles.productImage}
            />
            <div className={styles.productDescription}>
                <h5 className={styles.productTitle}>
                    Mega Beast Dyform Long 358
                </h5>
            </div>
        </div>
    );
}

// CatchyDescription -> Text that will be dangerously set
// SectionHeading -> { title, caption }
// SectionDescriptionLine -> Text that will be dangerously set
// ProductsRangeHeading -> title
// Products -> list of products

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
                    <div className={styles.productsSection}>
                        <h4 className={styles.productsSectionTitle}>
                            Berco Undercarriage Parts
                        </h4>
                        <div className={styles.productsListContainer}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                                <Product
                                    imgSrc={`/images/products/undercarriage/${item}.jpg`}
                                />
                            ))}
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
