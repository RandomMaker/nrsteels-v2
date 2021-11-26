import React, { useEffect } from "react";
import { CaptionHeading, RevealCard } from "@components";
import styles from "./index.module.css";
import { Pages } from "@enums";
import gsap from "gsap";

export default function ProductsRangePage() {
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

    return (
        <React.Fragment>
            <CaptionHeading
                title="Markets We Serve"
                caption="Our Products Range"
                titleClassName="mt-5 uppercase font-bold"
            />
            <div className={styles.cInnerContent}>
                <RevealCard
                    imgLink="/images/sectors/mining.jpg"
                    title="Mining"
                    textLeft={false}
                    description={
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Rerum, quam deserunt accusantium architecto,
                            molestias voluptates sequi repellendus alias ipsam
                            nulla fuga deleniti maxime vero at labore modi natus
                            velit maiores.
                        </p>
                    }
                />
                <RevealCard
                    imgLink="/images/sectors/mining.jpg"
                    title="Mining"
                    textLeft={true}
                    description={
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Rerum, quam deserunt accusantium architecto,
                            molestias voluptates sequi repellendus alias ipsam
                            nulla fuga deleniti maxime vero at labore modi natus
                            velit maiores.
                        </p>
                    }
                />
            </div>
        </React.Fragment>
    );
}

ProductsRangePage.activePage = Pages.ProductsRange;
