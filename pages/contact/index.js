import { ContactCard } from "@components";
import { Pages } from "@enums";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
    faEnvelope,
    faMapMarkerAlt,
    faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mx } from "@utils";
import React, { useState } from "react";
import styles from "./index.module.css";

export default function ContactPage() {
    const contactDetails = {
        addressLine1: "Karni Vihra Road, Nehru Nagar",
        addressLine2: "Ajmer-305001, Rajasthan",
        addressLine3: "INDIA",
        emailId: "jain.s10008@gmail.com",
        whatsappContactNumber: "919116751744",
        displayContactNumber: "+91 911675744",
    };

    const formSubmitThrough = {
        Whatsapp: "whatsapp",
        Email: "email",
    };

    const [formEmail, setFormEmail] = useState("");
    const [formMobile, setFormMobile] = useState("");
    const [formQuery, setFormQuery] = useState("");
    const [formSubject, setFormSubject] = useState("");
    const [formName, setFormName] = useState("");
    const [formSendThrough, setFormSendThrough] = useState(null);

    const updateField = (ev, setter) => setter(ev.target.value);

    const queryFormSubmit = (ev) => {
        ev.preventDefault();
        if (formSendThrough == formSubmitThrough.Whatsapp) {
            window.location =
                "https://wa.me/" +
                contactDetails.whatsappContactNumber +
                "?text=" +
                encodeURIComponent(
                    `Subject: *${formSubject}*\n\nHii there,\n${formQuery}\n\nRegards,\n${formName}\n${formEmail}\n${formMobile}
            `
                );
        }
        if (formSendThrough == formSubmitThrough.Email) {
            window.location =
                "mailto:" +
                contactDetails.emailId +
                "?subject=" +
                encodeURIComponent(formSubject) +
                "&body=" +
                encodeURIComponent(
                    `Hi there,\n${formQuery}\n\nRegards,\n${formName}\n${formEmail}\n${formMobile}`
                );
        }

        setFormSendThrough(null);
    };

    return (
        <React.Fragment>
            <div className={styles.contactCardContainer}>
                <ContactCard icon={faMapMarkerAlt}>
                    <p>{contactDetails.addressLine1}</p>
                    <p>{contactDetails.addressLine2}</p>
                    <p>{contactDetails.addressLine3}</p>
                </ContactCard>
                <ContactCard
                    icon={faPhoneAlt}
                    link={"tel:" + contactDetails.displayContactNumber}
                >
                    <p className="text-3xl">
                        {contactDetails.displayContactNumber}
                    </p>
                </ContactCard>
                <ContactCard
                    icon={faWhatsapp}
                    link={
                        "https://wa.me/" + contactDetails.whatsappContactNumber
                    }
                >
                    <p className="text-3xl">
                        {contactDetails.displayContactNumber}
                    </p>
                </ContactCard>
                <ContactCard
                    icon={faEnvelope}
                    link={"mailto:" + contactDetails.emailId}
                >
                    <p className="text-2xl">{contactDetails.emailId}</p>
                </ContactCard>
            </div>

            {/* Query Form */}
            <div className={styles.queryFormContainer}>
                <h1 className={mx("text-center text-4xl")}>Enquiry Form</h1>
                <form className={styles.queryForm} onSubmit={queryFormSubmit}>
                    <input
                        onChange={(ev) => updateField(ev, setFormName)}
                        type="text"
                        placeholder="Name*"
                        required
                    />
                    <input
                        onChange={(ev) => updateField(ev, setFormEmail)}
                        type="email"
                        placeholder="Email*"
                        required
                    />
                    <input
                        onChange={(ev) => updateField(ev, setFormMobile)}
                        type="tel"
                        placeholder="Phone*"
                        required
                    />
                    <select
                        onChange={(ev) => updateField(ev, setFormSubject)}
                        name="Subject"
                        title="Subject"
                        required
                    >
                        <option value="">Select Subject</option>
                        <option value="General Enquiry">Genral Enquiry</option>
                        <option value="Proposals">Proposals</option>
                        <option value="Distributorship Enquiry">
                            Distributorship Enquiry
                        </option>
                        <option value="Product Complaint">
                            Product Complaint
                        </option>
                        <option value="Career/Internships">
                            Career/Enternships
                        </option>
                    </select>
                    <textarea
                        required
                        onChange={(ev) => updateField(ev, setFormQuery)}
                        className=" col-span-2"
                        rows="8"
                    ></textarea>
                    <button
                        className="rounded-lg w-full py-4 text-xl drop-shadow "
                        type="submit"
                        onClick={() =>
                            setFormSendThrough(formSubmitThrough.Whatsapp)
                        }
                    >
                        <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
                    </button>
                    <button
                        className="rounded-lg  w-full py-4 text-xl drop-shadow"
                        type="submit"
                        onClick={() => {
                            setFormSendThrough(formSubmitThrough.Email);
                        }}
                    >
                        <FontAwesomeIcon icon={faEnvelope} /> Email
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
}

ContactPage.activePage = Pages.Contact;
