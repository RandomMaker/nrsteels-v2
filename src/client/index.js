import { markets } from "./data";
export { getProductClassLink } from "./data";

export function getMarkets() {
    return markets;
}

export function getMarketDetails(marketSlug) {
    return markets.find((item) => item.slug === marketSlug);
}
