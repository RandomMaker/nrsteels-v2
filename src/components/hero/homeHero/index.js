import styles from "./index.module.css";
import { mx } from "@utils";
import { useEffect, useRef, useState } from "react";
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
        // gsap.set(boxRef.current, {
        //     attr: {
        //         class: `${styles.photoBox} pb-col` + column,
        //     },
        //     objectFit: "cover",
        //     objectPosition: "center",
        //     overflow: "hidden",
        //     x: [60, 280, 500][column],
        //     width: 400,
        //     height: 640,
        //     borderRadius: 20,
        //     scale: 0.5,
        //     zIndex: 1,
        // });

        gsap.set(boxRef.current, {
            attr: {
                class: `${styles.photoBox} pb-col` + column,
            },
            backgroundImage: `url("${productImg}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
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
        <div
            // src={productImg || "https://wallpaperaccess.com/full/1556608.jpg"}
            ref={boxRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        ></div>
    );
};

export default function HomeHero() {
    let column = -1;
    let currentImg = undefined;
    let delayedPlay;
    let isZooming = false;
    let currentImgProps = { x: 0, y: 0 };
    let mouse = { x: 0, y: 0 };

    let reelsBoxes = [];

    const reelsBoxContainerRef = useRef();
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [defaultMainBoxesWidth, setDefaultMainBoxesWidth] = useState(1250);

    for (var i = 0; i < 12; i++) {
        if (i % 4 == 0) column++;
        reelsBoxes.push(
            <ReelsBox
                key={i}
                index={i}
                productImg={productImages[i]}
                column={column}
                handleMouseEnter={handleMouseEnteredReelsBox}
                handleMouseLeave={handleMouseLeaveReelsBox}
                handleClick={handleReelsBoxClick}
            />
        );
    }

    useEffect(() => {
        setDefaultMainBoxesWidth(checkMainBoxesWidth());
        if (!!("ontouchstart" in window)) {
            console.log("touch device!");
            mouse.x = window.innerWidth - 20;
            mouse.y = 60 + 20;
            setIsTouchDevice(true);
        } else {
            setIsTouchDevice(false);
        }
        window.addEventListener("resize", () => {
            setDefaultMainBoxesWidth(checkMainBoxesWidth);
        });
    });

    const checkMainBoxesWidth = () => {
        const ss = 1250;

        if (window.innerWidth >= 768) {
            console.log("Large Screen Detected");
            ss = 1200;
        }
        if (window.innerWidth >= 1024) {
            console.log("Extra Large Screen Detected");
            ss = 1100;
        }

        return ss;
    };

    useEffect(() => {
        let tl = gsap
            .timeline({ onStart: playBoxes })
            .set(`.${styles.main}`, {
                perspective: 800,
            })
            .set(`.${styles.mainBoxes}`, {
                left: "75%",
                xPercent: -50,
                rotationX: 14,
                rotationY: -15,
                rotationZ: 15,
            })
            .set(`.${styles.photoBox}`, { display: "block" })
            .fromTo(
                `.${styles.photoBox}`,
                { opacity: 0 },
                {
                    opacity: 1,
                    cursor: "pointer",
                    stagger: 0.08,
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

    function pauseBoxes(b) {
        var classStr = "pb-col0";
        if (b.classList.contains("pb-col1")) classStr = "pb-col1";
        if (b.classList.contains("pb-col2")) classStr = "pb-col2";
        for (var i = 0; i < reelsBoxContainerRef.current.children.length; i++) {
            var b = reelsBoxContainerRef.current.children[i];
            if (b.classList.contains(classStr))
                gsap.to(b.tl, { timeScale: 0, ease: "sine" });
        }
    }

    function handleMouseEnteredReelsBox(e) {
        if (currentImg) return;
        if (delayedPlay) delayedPlay.kill();

        var _t = e.target;
        pauseBoxes(_t);

        gsap.to(`.${styles.photoBox}`, {
            duration: 0.4,
            overwrite: "auto",
            opacity: function (i, t) {
                return t == _t ? 1 : 0.3;
            },
            ease: "ease.inOut",
        });

        gsap.fromTo(
            _t,
            { zIndex: 100 },
            {
                duration: 0.2,
                scale: 0.62,
                overwrite: "auto",
                ease: "power3",
            }
        );
    }

    function handleMouseLeaveReelsBox(e) {
        if (currentImg) return;
        var _t = e.target;

        if (gsap.getProperty(_t, "scale") > 0.62)
            delayedPlay = gsap.delayedCall(0.3, playBoxes);
        // to avoid jump, add delay when mouseout occurs as big image scales back down (not 100% reliable because the scale value sometimes evaluates too late)
        else playBoxes();

        gsap.timeline()
            .set(_t, { zIndex: 1 })
            .to(
                _t,
                {
                    duration: 0.3,
                    scale: 0.5,
                    overwrite: "auto",
                    ease: "expo",
                },
                0
            )
            .to(
                `.${styles.photoBox}`,
                { duration: 0.5, opacity: 1, ease: "power2.inOut" },
                0
            );
    }

    function handleReelsBoxClick(e) {
        if (!isZooming) {
            isZooming = false;

            if (currentImg) {
                gsap.timeline({ defaults: { ease: "expo.inOut" } })
                    .to(
                        `.${styles.mainClose}`,
                        { duration: 0.1, autoAlpha: 0, overwrite: true },
                        0
                    )
                    .to(
                        `.${styles.mainBoxes}`,
                        {
                            duration: 0.5,
                            scale: 1,
                            left: "75%",
                            width: defaultMainBoxesWidth,
                            rotationX: 14,
                            rotationY: -15,
                            rotationZ: 15,
                            overwrite: true,
                        },
                        0
                    )
                    .to(
                        `.${styles.photoBox}`,
                        { duration: 0.6, opacity: 1, ease: "power4.inOut" },
                        0
                    )
                    .to(
                        currentImg,
                        {
                            duration: 0.6,
                            width: 400,
                            height: 640,
                            borderRadius: 20,
                            x: currentImgProps.x,
                            y: currentImgProps.y,
                            scale: 0.5,
                            rotation: 0,
                            zIndex: 1,
                        },
                        0
                    )
                    .add(playBoxes, 0.8);
                currentImg = undefined;
            } else {
                pauseBoxes(e.target);
                currentImg = e.target;

                currentImgProps.x = gsap.getProperty(currentImg, "x");
                currentImgProps.y = gsap.getProperty(currentImg, "y");

                gsap.timeline({
                    defaults: { duration: 0.6, ease: "expo.inOut" },
                })
                    .set(currentImg, { zIndex: 100 })
                    .fromTo(
                        `.${styles.mainClose}`,
                        {
                            x: mouse.x,
                            y: mouse.y,
                            background: "rgba(0,0,0,0)",
                        },
                        {
                            autoAlpha: 1,
                            duration: 0.3,
                            ease: "power3.inOut",
                        },
                        0
                    )
                    .to(`.${styles.photoBox}`, { opacity: 0 }, 0)
                    .to(
                        currentImg,
                        {
                            width: "100%",
                            height: "100%",
                            borderRadius: 0,
                            x: 0,
                            top: 0,
                            y: 0,
                            scale: 1,
                            opacity: 1,
                        },
                        0
                    )
                    .to(
                        `.${styles.mainBoxes}`,
                        {
                            duration: 0.5,
                            left: "50%",
                            width: "100%",
                            rotationX: 0,
                            rotationY: 0,
                            rotationZ: 0,
                        },
                        0.15
                    )
                    .to(
                        `.${styles.mainBoxes}`,
                        {
                            duration: 5,
                            scale: 1.06,
                            rotation: 0.05,
                            ease: "none",
                        },
                        0.65
                    );
            }
        }
    }

    function handleCloseButtonMouseMove(e) {
        if (!isTouchDevice) {
            mouse.x = e.pageX + 30;
            mouse.y = e.pageY - 80 + 30;
            if (currentImg)
                gsap.to(`.${styles.mainClose}`, {
                    duration: 0.1,
                    x: mouse.x,
                    y: mouse.y,
                    overwrite: "auto",
                });
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.headerContentText}>
                    <h1 className={styles.headerBannerText}>
                        NRS: India's biggest dealers in steel wire ropes.
                    </h1>
                    <h3 className={styles.headerBannerSubText}>
                        We offer a wide range of steel items to tackle with any
                        situation.
                    </h3>
                </div>
            </div>
            <div
                className={styles.main}
                id="main"
                onMouseMove={handleCloseButtonMouseMove}
            >
                <div
                    id="mainBoxes"
                    className={mx(styles.mainBoxes, styles.fs)}
                    ref={reelsBoxContainerRef}
                >
                    {reelsBoxes}
                </div>
                <div className={styles.mainClose} id="mainClose">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        fill="none"
                    >
                        <circle
                            cx="30"
                            cy="30"
                            r="30"
                            fill="#000"
                            opacity="0.4"
                        />
                        <path
                            d="M15,16L45,46 M45,16L15,46"
                            stroke="#000"
                            strokeWidth="3.5"
                            opacity="0.5"
                        />
                        <path
                            d="M15,15L45,45 M45,15L15,45"
                            stroke="#fff"
                            strokeWidth="2"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
