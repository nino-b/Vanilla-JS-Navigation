import BaseComponent from "./BaseComponent";
/**
 * Adds CSS to a newly created page.
 */
import homePageCSS from 'bundle-text:../styles/homePage.css';


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