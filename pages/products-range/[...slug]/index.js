import { getMarketDetails, getMarkets } from "@client";
import { CaptionHeading, SimpleHero } from "@components";
import { Pages } from "@enums";
import React from "react";
import styles from "./index.module.css";

import { mx } from "@utils";
import globalStyles from "@styles/global.module.css";

const branch = {
    name: "Marble Mining",
    caption: "Our Speciality",
    description:
        "Lorem ipsum sit dolor contra voila bolario sono matro kokaneionan armei voila cora bolatro mainia filario coastania",
    products: [],
};

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
                    This will be the products space
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
