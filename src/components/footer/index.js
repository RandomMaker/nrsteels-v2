import React from "react";
import styles from "./index.module.css";
import { mx } from "@utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faEnvelope as faEnvelopeSquare,
    faPhoneAlt as faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

const contactDetails = {
    addressLine1:
        "Gyanodaya Nagar, Srinagar Road, Near By Karni Vihra Road, Nehru Nagar",
    addressLine2: "Ajmer-305001, Rajasthan",
    addressLine3: "INDIA",
    emailId: "jain.s10008@gmail.com",
    contactNumber: "+91 9116751744",
};

export default function Footer() {
    return (
        <footer>
            <div className={styles.footerContactSection}>
                <div>
                    <span
                        className={mx(
                            styles.preMainHeading
                            // globalStyles.shoveSideHeading
                        )}
                    >
                        Get In Touch
                    </span>
                    <h1 className={styles.mainHeading}>
                        OFFICE <strong>N.R STEELS, AJMER</strong>
                    </h1>
                </div>
                <hr className={styles.divider} />
                <div className={styles.address}>
                    {/* <!-- Address --> */}
                    <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                    {/* Address section */}
                    <span>
                        {contactDetails.addressLine1}
                        <br />
                        {contactDetails.addressLine2}
                        <br />
                        {contactDetails.addressLine3}
                    </span>
                    <br />
                    {/* <!-- Email --> */}
                    <FontAwesomeIcon icon={faEnvelopeSquare} />{" "}
                    <a href={"mailto:" + contactDetails.emailId}>
                        {contactDetails.emailId}&nbsp;&nbsp;
                    </a>
                    {/* <!-- Contact Number --> */}
                    <FontAwesomeIcon icon={faPhoneSquareAlt} />{" "}
                    <a href={"tel:" + contactDetails.contactNumber}>
                        {contactDetails.contactNumber}
                    </a>
                </div>
            </div>
            <div className={styles.copyrightSection}>
                <p>Copyright ©2020 All right reserved by N.R. Steels</p>
                <p>
                    Created by{" "}
                    <a href="https://sarwang.vercel.app">Sarwang Jain</a>
                </p>
            </div>
        </footer>
    );
}
