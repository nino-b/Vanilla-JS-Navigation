import BaseComponent from "./BaseComponent";
import addScrollAnimation from "../uiEffects/infiniteHorizontalScroll";
/**
 * Adds CSS to a newly created page.
 */
import homePageCSS from 'bundle-text:../styles/homePage.css';
import { queryElementGroup } from "../utils/DOMUtils";
import { elementGroups, removeListeners } from "../data/DOMElements";
import router from "../services/Router";


/**
 * Creates a <home-page> Custom HTML Element.
 */
export default class HomePage extends BaseComponent {
  constructor() {
    super();
    /** 
    * @type {string | null} - An ID of HTML template tag, which contains template for specific page.
    */
    this.templateID = 'home-page-template';
    this.pageStyles = homePageCSS;

  }
  /**
   * Gets page-specific nav DOM elements and stores fetched element list in the DOM element store object ('elementGroups').
   * This way Router can also access those elements and navigate through pages.
   * 
   * Because this is a Single Page Application and each page content is created dynamically, and also each page has its own Shadow DOM,
   * page content is not globally accessible. 
   * And this gives router access to the page specific content.
   */
  getHomePageLinks() {
    const navItems = queryElementGroup('.scroller-nav-item', this.root);
    elementGroups.homePageNavItems = navItems;
  }
  /**
   * Adds link click event listeners to the page specific nav elements.
   * Because this is a Single Page Application and each page content is created dynamically, and also each page has its own Shadow DOM,
   * page content is not globally accessible.
   * Event listeners need to be applied to a newly created page each time.
   */
  addPageRouter() {
    router.setupLinkListeners(elementGroups.homePageNavItems);
  }
  render() {
    if (!this.scrollers) {
      this.scrollers = queryElementGroup('.scroller', this.root);
    }
    addScrollAnimation(this.scrollers);
  }
  /**
   * A function that will be executed when a custom element ('home-page') is created.
   * It adds additional functionalities that was declared in the 'BaseComponent'.
   */
  connectedCallback() {
    super.connectedCallback();
    this.getHomePageLinks();
    this.addPageRouter();
  }
  /**
   * Removes event listeners from a page specific element group to avoid memory leaks.
   * It will be executed when a custom element ('home-page') is removed from the page.
   */
  disconnectedCallback() {
    removeListeners(elementGroups.homePageNavItems);
  }
}

/**
 * Defines a custom element.
 * 
 * 'customElements' is a method provided by Web Components API 
 * that allows to create a Custom HTML Element.
 * 
 * Custom Element's name should always be written with hyphen (-), 
 * this ensures that there won't be any future inconsistencies.
 */
customElements.define('home-page', HomePage);