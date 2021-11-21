import styles from "./index.module.css";
import PropTypes from "prop-types";
import { mx } from "@utils";

export default function CaptionHeading({
    title,
    boldTitle,
    caption,
    titleClassName = "",
    captionClassName = "",
    boldTitleClassName = "",
    afterTitle,
}) {
    return (
        <h1 className={mx(styles.heading, titleClassName)}>
            {title} <strong className={boldTitleClassName}>{boldTitle}</strong>
            {afterTitle}
            <span className={mx(styles.caption, captionClassName)}>
                {caption}
            </span>
        </h1>
    );
}

CaptionHeading.propTypes = {
    title: PropTypes.string.isRequired,
    boldTitle: PropTypes.string,
    caption: PropTypes.string.isRequired,
    titleClassName: PropTypes.string,
    captionClassName: PropTypes.string,
    boldTitleClassName: PropTypes.string,
};
