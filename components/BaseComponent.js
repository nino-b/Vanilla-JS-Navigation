import { setUpTemplate } from "../utils/logicUtils.js";

/**
 * Contains common features for all components. 
 * Other components will extend from it.
 */
export default class BaseComponent extends HTMLElement {
  constructor() {
    super();
    /**
     * Sets up a shadow DOM, with mode: open (elements outside Shadow DOM can interact with it).
     */
    this.root = this.attachShadow({mode: 'open'});
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
  /**
   * A callback function for a HTML Custom Element that will be executed when the element is rendered.
   */
  connectedCallback() {
    setUpTemplate(this.root, this.templateID);
    this.render();
  }
}