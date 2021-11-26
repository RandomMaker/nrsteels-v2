import styles from "./index.module.css";
import { mx } from "@utils";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function RevealBlock({
    title,
    description,
    imgLink,
    imgLinkAlt,
    textLeft = true,
}) {
    useEffect(() => {
        gsap.utils.toArray(`.${styles.gsReveal}`).forEach(function (elem) {
            hide(elem); // assure that the element is hidden when scrolled into view

            ScrollTrigger.create({
                trigger: elem,
                onEnter: function () {
                    animateFrom(elem);
                },
                onEnterBack: function () {
                    animateFrom(elem, -1);
                },
                onLeave: function () {
                    hide(elem);
                }, // assure that the element is hidden when scrolled into view
                onLeaveBack: function () {
                    hide(elem);
                },
            });
        });
    });

    const hide = (elem) => {
        gsap.set(elem, { autoAlpha: 0 });
    };

    const animateFrom = (elem, direction) => {
        direction = direction || 1;
        var x = 0,
            y = direction * 100;
        if (elem.classList.contains(styles.gsRevealFromLeft)) {
            x = -100;
            y = 0;
        } else if (elem.classList.contains(styles.gsRevealFromRight)) {
            x = 100;
            y = 0;
        }
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap.fromTo(
            elem,
            { x: x, y: y, autoAlpha: 0 },
            {
                duration: 1.25,
                x: 0,
                y: 0,
                autoAlpha: 1,
                ease: "expo",
                overwrite: "auto",
            }
        );
    };

    const imagePart = (
        <div
            className={mx(
                styles.featuredImageContainer,
                styles.ipsGridSpan5,
                styles.gsReveal,
                textLeft ? styles.gsRevealFromRight : styles.gsRevealFromLeft
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
            <h2 className={mx(styles.headingLarge, styles.gsReveal)}>
                {title}
            </h2>
            <div className={styles.gsReveal}>{description}</div>
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
