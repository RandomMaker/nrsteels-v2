import React, { useEffect } from "react";
import { CaptionHeading, RevealCard } from "@components";
import styles from "./index.module.css";
import { Pages } from "@enums";
import gsap from "gsap";
import globalStyles from "@styles/global.module.css";
import Link from "next/link";
import { mx } from "@utils";

const sectors = [
    {
        name: "Mining",
        image: "/images/sectors/mining.jpg",
        description:
            "Lorem ipsum dolor si amet, consectetur adipisicing elit. Rerum, quam deserunt accusantium architecto, molestias voluptates sequi repellendus alias ipsam nulla fuga deleniti maxime vero at labore modi natus velit maiores",
        btnLink: "",
    },
    {
        name: "Rigging",
        image: "/images/sectors/rigging.jpg",
        description:
            "Lorem ipsum dolor si amet, consectetur adipisicing elit. Rerum, quam deserunt accusantium architecto, molestias voluptates sequi repellendus alias ipsam nulla fuga deleniti maxime vero at labore modi natus velit maiores",
        btnLink: "",
    },
    {
        name: "Piling",
        image: "/images/sectors/piling.jpg",
        description:
            "Lorem ipsum dolor si amet, consectetur adipisicing elit. Rerum, quam deserunt accusantium architecto, molestias voluptates sequi repellendus alias ipsam nulla fuga deleniti maxime vero at labore modi natus velit maiores",
        btnLink: "",
    },
    {
        name: "Elevators",
        image: "/images/sectors/elevators.jpg",
        description:
            "Lorem ipsum dolor si amet, consectetur adipisicing elit. Rerum, quam deserunt accusantium architecto, molestias voluptates sequi repellendus alias ipsam nulla fuga deleniti maxime vero at labore modi natus velit maiores",
        btnLink: "",
    },
    {
        name: "Off shore",
        image: "/images/sectors/offshore.jpg",
        description:
            "Lorem ipsum dolor si amet, consectetur adipisicing elit. Rerum, quam deserunt accusantium architecto, molestias voluptates sequi repellendus alias ipsam nulla fuga deleniti maxime vero at labore modi natus velit maiores",
        btnLink: "",
    },
    // {
    //     name: "Borewell Drilling",
    //     image: "",
    //     description: "",
    //     btnLink: "",
    // },
];

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
                {sectors.map((item, ind) => {
                    return (
                        <RevealCard
                            imgLink={item.image}
                            title={item.name}
                            textLeft={ind % 2 == 0 ? false : true}
                            description={
                                <>
                                    <p className={"mb-5"}>{item.description}</p>
                                    <Link href={item.btnLink}>
                                        <a
                                            className={mx(
                                                globalStyles.btnLink,
                                                " px-5"
                                            )}
                                        >
                                            View Products
                                        </a>
                                    </Link>
                                </>
                            }
                        />
                    );
                })}
            </div>
        </React.Fragment>
    );
}

ProductsRangePage.activePage = Pages.ProductsRange;
