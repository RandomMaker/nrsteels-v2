// Long
// Heavy Duty Long
// Tiger Long
// Rock Chiesel
// Ripper Tooth
// Weld-on Adapter
// Flushmount Adapter
// Side Cutter
// Bolt-on corner adapter
// Bolt-on 2 holes adapter
// Bolt-on 2 holes corner
// 2 Holes Bolt Center Adapter
// Sacrifier Shanks
// Sacrifier Tips

import { Pages } from "@enums";

//#region Markets

function getSectorLink(sectorSlug) {
    return `${Pages.ProductsRange}/${sectorSlug}`;
}

function getSectorImageLink(sectorImg) {
    return `/images/sectors/${sectorImg}`;
}

const mining = {
    name: "Mining",
    metaDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quam deserunt accusantium architecto, molestias voluptates sequi repellendus alias ipsam nulla fuga deleniti maxime vero at labore modi natus velit maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    description:
        "We provide the most cutting edge products solutions in the mining industry. Our products specializes in underground mining sector.",
    slug: "mining",
    imageName: "mining.jpg",
    caption: "Mining Caption",
    get link() {
        return getSectorLink(this.slug);
    },
    get imgSrc() {
        return getSectorImageLink(this.imageName);
    },
};

const rigging = {
    name: "Rigging",
    metaDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quam deserunt accusantium architecto, molestias voluptates sequi repellendus alias ipsam nulla fuga deleniti maxime vero at labore modi natus velit maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    description: "",
    slug: "rigging",
    imageName: "rigging.jpg",
    caption: "Rigging Caption",
    get link() {
        return getSectorLink(this.slug);
    },
    get imgSrc() {
        return getSectorImageLink(this.imageName);
    },
};

const piling = {
    name: "Piling",
    metaDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quam deserunt accusantium architecto, molestias voluptates sequi repellendus alias ipsam nulla fuga deleniti maxime vero at labore modi natus velit maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    description: "",
    slug: "piling",
    imageName: "piling.jpg",
    caption: "Piling Caption",
    get link() {
        return getSectorLink(this.slug);
    },
    get imgSrc() {
        return getSectorImageLink(this.imageName);
    },
};

const elevators = {
    name: "Elevators",
    metaDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quam deserunt accusantium architecto, molestias voluptates sequi repellendus alias ipsam nulla fuga deleniti maxime vero at labore modi natus velit maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    description: "",
    slug: "elevators",
    imageName: "elevators.jpg",
    caption: "Elevators Caption",
    get link() {
        return getSectorLink(this.slug);
    },
    get imgSrc() {
        return getSectorImageLink(this.imageName);
    },
};

const offShore = {
    name: "Off Shore",
    metaDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quam deserunt accusantium architecto, molestias voluptates sequi repellendus alias ipsam nulla fuga deleniti maxime vero at labore modi natus velit maiores. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    description: "",
    slug: "off-shore",
    imageName: "offShore.jpg",
    caption: "Off-Shore Caption",
    get link() {
        return getSectorLink(this.slug);
    },
    get imgSrc() {
        return getSectorImageLink(this.imageName);
    },
};

//#endregion

export const markets = [mining, rigging, piling, elevators, offShore];
