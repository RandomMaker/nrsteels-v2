import styles from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactCard({ icon, children, link }) {
    return (
        <a href={link} className={styles.cardContainer}>
            <FontAwesomeIcon className={styles.icon} icon={icon} />
            <span className={styles.cardText}>{children}</span>
        </a>
    );
}
