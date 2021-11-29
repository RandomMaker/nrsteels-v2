import { CaptionHeading, RevealCard } from "@components";
import { Pages } from "@enums";
import globalStyles from "@styles/global.module.css";
import { mx } from "@utils";
import Link from "next/link";
import React from "react";
import styles from "./index.module.css";
import { getMarkets } from "@client";

export default function ProductsRangePage() {
    return (
        <React.Fragment>
            <CaptionHeading
                title="Markets We Serve"
                caption="Our Products Range"
                titleClassName="mt-5 uppercase font-bold"
            />
            <div className={styles.cInnerContent}>
                {getMarkets().map((item, ind) => {
                    return (
                        <RevealCard
                            imgLink={item.imgSrc}
                            title={item.name}
                            textLeft={ind % 2 == 0 ? false : true}
                            description={
                                <>
                                    <p className={"mb-5"}>
                                        {item.metaDescription}
                                    </p>
                                    <Link href={item.link}>
                                        <a
                                            className={mx(
                                                globalStyles.btnLink,
                                                styles.btn
                                            )}
                                        >
                                            Browse {item.name}
                                        </a>
                                    </Link>
                                </>
                            }
                            key={ind}
                        />
                    );
                })}
            </div>
        </React.Fragment>
    );
}

ProductsRangePage.activePage = Pages.ProductsRange;
