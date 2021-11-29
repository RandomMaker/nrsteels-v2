import { getMarketDetails, getMarkets } from "@client";
import { CaptionHeading, SimpleHero } from "@components";
import { Pages } from "@enums";
import React from "react";
import styles from "./index.module.css";

import { mx } from "@utils";
import globalStyles from "@styles/global.module.css";

export default function ProductsListPage({ market }) {
    return (
        <React.Fragment>
            <SimpleHero imgLink={market.imgSrc} title={market.name} />
            <CaptionHeading
                title={market.name}
                caption={market.caption}
                titleClassName="mt-5 uppercase font-bold"
            />
            <p className={styles.paraText}>
                This is a paragraph. We at N.R. Steels offer only premium
                quality equipments used in underground mining. Try us once and
                let's do this forever XOXO. Let us offer you some of the most
                premium quality items for mining \_(o_o)_/
                <br />
                <strong>
                    We serve the best equipments for underground mining.
                </strong>
            </p>
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
