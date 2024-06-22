import translatePageCSS from 'bundle-text:../styles/translatePage.css';
import BaseComponent from './BaseComponent';


export default class TranslatePage extends BaseComponent {
  constructor() {
    super();
    /** 
    * @type {string | null} - An ID of HTML template tag, which contains template for specific page.
    */
    this.templateID = 'translate-page-template';
    /** 
    * @type {string | null} - A page specific styles that was imported ('import homePageCSS from 'bundle-text:../styles/homePage.css';).
    */
    this.pageStyles = translatePageCSS;
  }
  
}


customElements.define('translate-page', TranslatePage);