import styles from "./index.module.css";
import { mx } from "@utils";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const productImages = [
    "https://media.istockphoto.com/photos/wire-rope-steeltwisted-connection-cable-abstract-strength-concept-picture-id157429440?k=20&m=157429440&s=612x612&w=0&h=OukPsAbFddQp7N-eR0GSIAUNOMVhEwD0Z-a3kPM5vxA=",
    "https://media.istockphoto.com/photos/steel-cable-background-picture-id1087131932?k=20&m=1087131932&s=612x612&w=0&h=1p68z-bz2vBuavo3x4BCC33nfgDOR1UbJ3G3k6ApBhM=",
    "https://cdn3.volusion.com/bmpcc.lkogv/v/vspfiles/photos/SHACKLE-6MM-2.jpg?v-cache=1591403579",
    "https://www.wireropefactory.com/img/wire-rope-sling-eye.jpg",
    "https://5.imimg.com/data5/JP/HB/IY/SELLER-46648594/galvanized-wire-rope-1-500x500.jpg",
    "https://5.imimg.com/data5/KP/LT/OD/SELLER-46648594/chain-blocks-2-500x500.jpg",
    "https://5.imimg.com/data5/UX/QC/MD/SELLER-46648594/wire-ropes-500x500.jpg",
    "https://5.imimg.com/data5/RU/FM/XX/SELLER-46648594/hand-spliced-wire-rope-slings-3-500x500.jpg",
    "https://www.tigerlifting.com/media/mxsjvt15/tcb.jpg",
    "https://5.imimg.com/data5/OE/QN/EM/SELLER-46648594/rock-drill-iron-rods-500x500.jpg",
    "https://5.imimg.com/data5/AY/MM/KH/SELLER-46648594/wire-rope-sling-with-collar-250x250.jpg",
    "https://5.imimg.com/data5/FL/PB/OJ/SELLER-46648594/bright-steel-wire-rope-1-250x250.jpg",
];

const ReelsBox = ({
    index,
    column,
    productImg,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
}) => {
    useEffect(() => {
        gsap.set(boxRef.current, {
            attr: {
                class: `${styles.photoBox} pb-col` + column,
            },
            objectFit: "cover",
            objectPosition: "center",
            overflow: "hidden",
            x: [60, 280, 500][column],
            width: 400,
            height: 640,
            borderRadius: 20,
            scale: 0.5,
            zIndex: 1,
        });

        boxRef.current.tl = gsap
            .timeline({ paused: true, repeat: -1 })
            .fromTo(
                boxRef.current,
                { y: [-575, 800, 800][column], rotation: -0.05 },
                {
                    duration: [40, 35, 26][column],
                    y: [800, -575, -575][column],
                    rotation: 0.05,
                    ease: "none",
                }
            )
            .progress((index % 4) / 4);
    }, []);

    const boxRef = useRef();

    return (
        <img
            src={productImg || "https://wallpaperaccess.com/full/1556608.jpg"}
            ref={boxRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        ></img>
    );
};

export default function HomeHero() {
    let column = -1;
    let reelsBoxes = [];

    const reelsBoxContainerRef = useRef();

    for (var i = 0; i < 12; i++) {
        if (i % 4 == 0) column++;
        reelsBoxes.push(
            <ReelsBox
                key={i}
                index={i}
                productImg={productImages[i]}
                column={column}
                // handleMouseEnter={handleMouseEnteredReelsBox}
                // handleMouseLeave={handleMouseLeaveReelsBox}
                // handleClick={handleReelsBoxClick}
            />
        );
    }

    useEffect(() => {
        let tl = gsap
            .timeline({ onStart: playBoxes })
            .set(`.${styles.main}`, {
                perspective: 800,
            })
            .set(`.${styles.mainBoxes}`, {
                left: "75%",
                xPercent: -50,
                width: 1200,
                rotationX: 14,
                rotationY: -15,
                rotationZ: 15,
            })
            .fromTo(
                `.${styles.photoBox}`,
                { opacity: 0 },
                {
                    opacity: 1,
                    cursor: "pointer",
                    stagger: 0.06,
                    delay: 0.5,
                }
            );
        return () => {
            tl.kill();
        };
    }, []);

    function playBoxes() {
        for (var i = 0; i < reelsBoxContainerRef.current.children.length; i++) {
            var tl = reelsBoxContainerRef.current.children[i].tl;
            tl.play();
            gsap.to(tl, {
                duration: 0.4,
                timeScale: 1,
                ease: "sine.in",
                overwrite: true,
            });
        }
    }

    return (
        <div className={mx(styles.main, styles.fs)} id="main">
            <div
                id="mainBoxes"
                className={mx(styles.mainBoxes, styles.fs)}
                ref={reelsBoxContainerRef}
            >
                {reelsBoxes}
            </div>
        </div>
    );
}
