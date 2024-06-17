import pageConfig from "../data/pageConfig";

import toggleLinkUnderline from "../uiEffects/toggleLinkUnderline";
import { elementGroups, elements } from "../data/DOMElements";

/**
 * A class to handle client-side routing in a single-page application.
 */
class Router {
  constructor(pageConfig, main, navItems) {
    this.pageConfig = pageConfig;
    this.main = main;
    this.navItems = navItems;

    this.setupLinkListeners();
    this.setupPopStateListener();
    this.processInitialUrl();
  }
  /**
   * Set up event listeners for navigation links to prevent default behavior and route internally.
   * 
   * Using bind in this context is necessary to ensure that 
   * the this context inside the handleClick method refers to the instance of the Router class, 
   * not the element that triggered the event. 
   * In JavaScript, event handlers are called with 'this' set to the element that triggered the event. 
   * By using bind(this), we explicitly set the this context of the handleClick method to the instance of the Router class.
  */
  setupLinkListeners(links = this.navItems) {
    links.forEach(a => {
      a.addEventListener('click', this.handleClick.bind(this));
    });
  }
  /**
   * Handles click events for links to prevent page reload and navigate internally.
   * And adds underline to the active link.
   * 
   * @param {Event} event - The click event from the navigation link.
  */
  handleClick(event) {
    event.preventDefault();
    const href = event.target.getAttribute('href');
    console.log('footerNav: ', elementGroups.footerNavItems);
    toggleLinkUnderline(elementGroups.headerNavItems, href, event.target, elementGroups.footerNavItems);
    this.go(href);
  }
  /**
   * Set up event listener for `popstate` event to handle back/forward navigation.
  */
 setupPopStateListener() {
  window.addEventListener('popstate', event => {
    this.go(event.state.route, false);
  });
 }
  /**
   * Process the initial URL to handle direct link access without reloading.
   * Adds underline to an active link.
  */
 processInitialUrl() {
  this.go(location.pathname);
  toggleLinkUnderline(elementGroups.headerNavItems, location.pathname);
 }
  /**
  * Processes the URL, 
  * retrieves a state object for this specific route,
  * updates the history, and updates the page content.
  * 
  * @param {string} route - The path to navigate to within the application.
  * @param {boolean} [addToHistory=true] - Flag to determine whether to add the navigation event to the browser's history stack.
  * @throws {Error} If the route is invalid.
  */
 go(route, addToHistory = true) {
  const config = this.pageConfig[route];
  if (!config) {
    throw new Error(`Invalid route. Unable to create a page. Invalid route or page config does not exist in the .data/pageConfig.js.`);
  }

  if (addToHistory) {
    this.updateHistory(config);
  }
  const pageElement = this.createPageElement(config);
  this.updatePageContent(pageElement);
 }
  /**
  * Updates the browser's history with the given route.
  * 
  * @param {object} state - The object that holds page state values: route, attributes, custom DOM element name.
  */
 updateHistory(state) {
  history.pushState(state, '', state.route);
 }
  /**
  * Updates the page content with the provided element.
  * 
  * @param {HTMLElement} pageElement - The page element to display.
  */
 updatePageContent(pageElement) {
  if (pageElement) {
    this.main.innerHTML = '';
    this.main.appendChild(pageElement);
    window.scroll(0, 0);
  } else {
    this.main.textContent = 'Oops, 404!';
  }
 }
  /**
  * Creates a page element based on the given route.
  * 
  * @param {Object} config - An object that holds state specific parameters.
  * @returns {HTMLElement} The newly created page element.
  * @throws {Error} If the route is invalid.
  */
 createPageElement(config) {
  const pageElement = document.createElement(config.customDOMEl);
  return pageElement;
 }
}

const router = new Router(pageConfig, elements.main, elementGroups.navItems);

export default router;