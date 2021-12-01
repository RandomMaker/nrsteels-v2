import styles from "./index.module.css";
import Link from "next/link";
import { Pages } from "@enums";
import { mx } from "@utils/styles";
import { useState } from "react";

export default function DescriptiveProduct({ product }) {
    const [productFocused, setProductFocused] = useState(false);
    const productTable = product.details.map((p) => {
        return (
            <tr className={styles.productTableRow}>
                <td className={styles.productTableCell}>
                    <strong> {p[0]}</strong>
                </td>
                <td className={styles.productTableCell}>{p[1]}</td>
            </tr>
        );
    });
    return (
        <div
            onClick={() => setProductFocused(!productFocused)}
            className={mx(
                styles.productContainer,
                (productFocused && styles.focused) || ""
            )}
            id={product.id}
        >
            <img className={styles.productImage} src={product.image1} alt="" />
            <div className={styles.productRightSection}>
                {/* Title and Price */}
                <h2 className={styles.productTitle}>
                    <strong>{product.title}</strong>
                </h2>
                <h3 className={styles.productPrice}>
                    <strong>{product.priceBold}</strong>
                    {product.priceAfter}
                </h3>

                <div className={styles.productExtraDetails}>
                    {/* <!-- Table --> */}
                    <table className={styles.productTable}>
                        {productTable}
                    </table>

                    {/* <!-- Description --> */}
                    <p className={styles.productDescription}>
                        {product.description}
                    </p>
                    <hr className={styles.smallDivider} />
                    <h4 className={styles.productDescription}>
                        Got any queries?
                    </h4>

                    <Link href={Pages.Contact}>
                        <a className={styles.contactUsBtn}>Contact Us</a>
                    </Link>
                </div>
                <div className={styles.arrow}>&#8595;</div>
            </div>
        </div>
    );
}
