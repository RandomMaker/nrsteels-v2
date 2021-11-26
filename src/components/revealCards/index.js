import styles from "./index.module.css";
import globalStyles from "@styles/global.module.css";
import { mx } from "@utils";
import Image from "next/image";

export default function RevealBlock({
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
                <Image
                    src={imgLink}
                    alt={imgLinkAlt}
                    className={styles.cardImg}
                    width={600}
                    height={400}
                    layout="fixed"
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
            <div className={globalStyles.gsReveal}>{description}</div>
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
