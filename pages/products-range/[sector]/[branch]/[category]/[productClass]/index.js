import { getMarketDetails, getMarkets } from "@client";
import { SimpleHero, DescriptiveProduct } from "@components";
import React from "react";
import styles from "./index.module.css";
import globalStyles from "@styles/global.module.css";
import { mx } from "@utils";

export default function ProductsPage({
    market,
    branch,
    category,
    productClass,
}) {
    // console.log(productClass);
    let product = null;
    if (productClass?.products && productClass?.products?.length > 0) {
        product = productClass.products[0];
    }
    return (
        <React.Fragment>
            <SimpleHero
                imgLink={market?.imgSrc}
                title={productClass?.name}
                subContent={
                    <h2 className={styles.subContent}>
                        {branch?.name} / {category?.name}
                    </h2>
                }
            />
            <h3
                className={mx(
                    styles.mainDescriptionLine,
                    globalStyles.gsReveal
                )}
            >
                {productClass?.description}
            </h3>
            {product != null && (
                <React.Fragment>
                    <DescriptiveProduct product={product} />
                    <DescriptiveProduct product={product} />
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

export async function getStaticProps(context) {
    const market = getMarketDetails(context.params.sector);
    const branch = market.branches.find(
        (b) => b.slug === context.params.branch
    );
    const category = branch.categories.find(
        (c) => c.slug === context.params.category
    );
    const productClass = category.productClasses.find(
        (pc) => pc.slug === context.params.productClass
    );

    delete market?.branches;
    delete branch?.categories;
    delete category?.productClasses;

    return {
        props: {
            market: market || null,
            branch: branch || null,
            category: category || null,
            productClass: productClass || null,
        },
    };
}

export async function getStaticPaths() {
    const paths = [];
    const markets = getMarkets();

    markets.forEach((market) => {
        market.branches.forEach((branch) => {
            branch.categories.forEach((cat) => {
                cat.productClasses.forEach((pc) => {
                    const path = {
                        params: {
                            sector: market.slug,
                            branch: branch.slug,
                            category: cat.slug,
                            productClass: pc.slug,
                        },
                    };
                    paths.push(path);
                });
            });
        });
    });

    return {
        paths: [],
        fallback: "blocking",
    };
}
