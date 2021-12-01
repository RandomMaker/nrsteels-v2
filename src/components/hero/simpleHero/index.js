import styles from "./index.module.css";
import Image from "next/image";

export default function SimpleHero({ title, imgLink, subContent }) {
    return (
        <main className={styles.hero}>
            <Image
                className={styles.heroImg}
                height={480}
                width={1920}
                src={imgLink}
                layout="responsive"
                priority
            />
            <div className={styles.overlay}>
                <div className={styles.overlayContent}>
                    <h1 className={styles.heroMainText}>{title}</h1>
                    {subContent}
                </div>
            </div>
        </main>
    );
}
