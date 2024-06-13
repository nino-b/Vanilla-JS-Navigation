import { setUpTemplate, toggleEventListener } from "../utils/logicUtils.js";
import CSSHandler from "../services/CSSHandler.js";

export default class BaseComponent extends HTMLElement{
  constructor() {
    super();

    this.root = this.attachShadow({mode: 'open'});
    /** 
    * @type {string | null} - A string that contains path to the CSS file.
    */
    this.pathToCSSFile = null;
    /** 
    * @type {string | null} - An ID of HTML template tag, which contains template for specific page.
    */
    this.templateID = null;
  }
  /** 
  * In each instance, it will be enhanced with specific functionalities.
  */
  render() {
    console.log('Base Component Rendered.');
  }
  pageSetup() {
    const setUpCSS = new CSSHandler(this.root, this.pathToCSSFile);
    setUpTemplate(this.root, this.templateID);
  }
}