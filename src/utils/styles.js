/**
 * Utility function to add more than one class to a component when using classNames property
 * @param classes A list of css classes or module
 * @returns A single string containing all the classNames
 */
export function mx(...classes) {
    return classes.join(" ");
}
