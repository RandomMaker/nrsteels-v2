import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import globalStyles from "@styles/global.module.css";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 });
};

const animateFrom = (elem, direction) => {
    direction = direction || 1;
    var x = 0,
        y = direction * 100;
    if (elem.classList.contains(globalStyles.gsRevealFromLeft)) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains(globalStyles.gsRevealFromRight)) {
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

export function useReveal() {
    useEffect(() => {
        gsap.utils
            .toArray(`.${globalStyles.gsReveal}`)
            .forEach(function (elem) {
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
}
