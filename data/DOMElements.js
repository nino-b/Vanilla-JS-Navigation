import { queryElementGroup, queryElement } from "../utils/DOMUtils"

/**
 * Holds queried elements from the DOM.
 */



/**
 * Using queryElementGroup each is more straightforward for a small project.
 */
const elementGroups = {
  navItems: queryElementGroup('.nav-item'),
}

const elements = {
  main: queryElement('main'),
}


export { elementGroups, elements };