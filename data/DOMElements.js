import queryElementGroup from "../utils/DOMUtils/queryElementGroup";
import queryElement from "../utils/DOMUtils/queryElement";

/**
 * Holds queried elements from the DOM.
 */



/**
 * Using queryElementGroup each is more straightforward for a small project.
 */
const elementGroups = {
  navItems: queryElementGroup('.nav-item'),
  headerNavItems: queryElementGroup('header .nav-item'),
  footerNavItems: queryElementGroup('footer .nav-item'),
  homePageNavItems: null,
  openDialogBtns: queryElementGroup('.open-dialog'),
  closeDialogBtns: queryElementGroup('.close-dialog'),
  dialogBoxes: queryElementGroup('.dialog-box'),
}

const elements = {
  main: queryElement('main'),
  selectTheme: queryElement('#theme'),
  toggleAnimation: queryElement('#toggle-animation'),
}


export { elementGroups, elements };