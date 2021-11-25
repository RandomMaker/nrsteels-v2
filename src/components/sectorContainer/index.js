import styles from "./index.module.css";
import Image from "next/image";
import PropTypes from "prop-types";

export default function SectionContainer({ imgLink, description }) {
    return (
        <div className={styles.sectorContainer}>
            <Image
                src={"/images/sectors/mining.jpg"}
                width={600}
                height={400}
                layout="intrinsic"
                className={styles.sectorImage}
            />
            <div className={styles.textPart}>
                <h2>Mining</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

SectionContainer.propTypes = {
    imgLink: PropTypes.string.isRequired,
};

// Title, Img And Description
// Mining, www.mining.hola BlaBlaBla
