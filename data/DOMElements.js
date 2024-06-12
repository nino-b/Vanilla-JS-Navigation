import { queryElementGroup, queryElement } from "../utils/DOMUtils"

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