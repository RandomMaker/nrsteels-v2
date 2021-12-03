import { Pages } from "@enums";

//#region Products

//#endregion

//#region Product Classes

function getSectorLink(sectorSlug) {
    return `${Pages.ProductsRange}/${sectorSlug}`;
}

function getSectorImageLink(sectorImg) {
    return `/images/sectors/${sectorImg}`;
}

function _getProductClassLink(classSlug) {
    return classSlug;
}

function getProductClassImageLink(imageName) {
    return `/images/products/classes/${imageName}`;
}

const pcAdapters = {
    name: "Adapter",
    description: "Lorem ipsum dolor sit amet, consectetur adipsing elit",
    imageName: "excavator_adapter.jpg",
    slug: "adapter",
    get imgSrc() {
        return getProductClassImageLink(this.imageName);
    },
    get link() {
        return _getProductClassLink(this.slug);
    },
    products: [],
};

const pcTooth = {
    name: "Tooth",
    description: "Lorem ipsum dolor sit amet, consectetur adipsing elit",
    imageName: "excavator_tooth.jpg",
    slug: "tooth",
    get imgSrc() {
        return getProductClassImageLink(this.imageName);
    },
    get link() {
        return _getProductClassLink(this.slug);
    },
    products: [],
};

const pcSideCutter = {
    name: "Side Cutter",
    description: "Lorem ipsum dolor sit amet, consectetur adipsing elit",
    imageName: "excavator_sidecutter.jpg",
    slug: "side-cutter",
    get imgSrc() {
        return getProductClassImageLink(this.imageName);
    },
    get link() {
        return _getProductClassLink(this.slug);
    },
    products: [],
};

const pcScarifier = {
    name: "Scrafier",
    description: "Lorem ipsum dolor sit amet, consectetur adipsing elit",
    imageName: "excavator_scarifier.jpg",
    slug: "scrafier",
    get imgSrc() {
        return getProductClassImageLink(this.imageName);
    },
    get link() {
        return _getProductClassLink(this.slug);
    },
    products: [],
};

const pcRollers = {
    name: "Rollers",
    description: "Lorem ipsum dolor sit amet, consectetur adipsing elit",
    imageName: "excavator_rollers.jpg",
    slug: "rollers",
    get imgSrc() {
        return getProductClassImageLink(this.imageName);
    },
    get link() {
        return _getProductClassLink(this.slug);
    },
    products: [],
};

const pcTrackShoes = {
    name: "Track Shoes",
    description: "Lorem ipsum dolor sit amet, consectetur adipsing elit",
    imageName: "excavator_trackshoes.jpg",
    slug: "track-shoes",
    get imgSrc() {
        return getProductClassImageLink(this.imageName);
    },
    get link() {
        return _getProductClassLink(this.slug);
    },
    products: [],
};

const pcIdlers = {
    name: "Idlers",
    description: "Lorem ipsum dolor sit amet, consectetur adipsing elit",
    imageName: "excavator_idlers.jpg",
    slug: "idlers",
    get imgSrc() {
        return getProductClassImageLink(this.imageName);
    },
    get link() {
        return _getProductClassLink(this.slug);
    },
    products: [],
};

const pcTrackChains = {
    name: "Track Chains",
    description: "Lorem ipsum dolor sit amet, consectetur adipsing elit",
    imageName: "excavator_trackchains.jpg",
    slug: "track-chains",
    get imgSrc() {
        return getProductClassImageLink(this.imageName);
    },
    get link() {
        return _getProductClassLink(this.slug);
    },
    products: [],
};

const pcDriveSprockets = {
    name: "Drive Sprockets",
    description: "Lorem ipsum dolor sit amet, consectetur adipsing elit",
    imageName: "excavator_drivesprockets.jpg",
    slug: "drive-sprockets",
    get imgSrc() {
        return getProductClassImageLink(this.imageName);
    },
    get link() {
        return _getProductClassLink(this.slug);
    },
    products: [],
};

//#endregion

//#region Categories

const cBucketComponents = {
    name: "Excavator Bucket Components",
    productClasses: [pcAdapters, pcTooth, pcSideCutter, pcScarifier],
};

const cUndercarriageParts = {
    name: "Excavator Undercarriage Parts",
    productClasses: [
        pcRollers,
        pcTrackChains,
        pcIdlers,
        pcTrackShoes,
        pcDriveSprockets,
    ],
};

//#endregion

// #region Branches

const bUndergroundMining = {
    name: "Underground Mining",
    caption: "Premium Quality",
    description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, quam deserunt accusantium architecto.",
    categories: [cBucketComponents, cUndercarriageParts],
};

// #endregion

//#region Markets
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
    branches: [bUndergroundMining],
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
    branches: [],
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
    branches: [],
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
    branches: [],
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
    branches: [],
};

//#endregion

export const markets = [mining, rigging, piling, elevators, offShore];

export function getProductClassLink(marketLink, productClassSlug) {
    return `${marketLink}/${productClassSlug}`;
}

// MARKET DETAILS
// Name
// Description
// Meta Description
// Branches

// BRANCH DETAILS
// Name
// Description
// Caption
// Product Classes

// PRODUCT CLASSES
// Name
// Products
// Description
// Link
// Image
