import { fetchData } from "../utils/asyncUtils.js";

/**
 * Class responsible for handling the fetching and application of CSS styles.
*/

export default class CSSHandler {
  /**
   * Fetched reset and shared CSS styles' files.
   */
  static resetCSS = fetchData('./styles/reset.css', false);
  static sharedCSS = fetchData('./styles/sharedStyles.css', false);

    /**
   * Creates an instance of CSSHandler.
   * @param {ShadowRoot} root - The root element where the styles will be applied.
   * @param {string} pathToCSSFile - The path to the component-specific CSS file.
   */
  constructor(root, pathToCSSFile) {
    this.root = root;
    /** 
     * @type {string | null} - A string that contains path to the CSS file.
    */
    this.pathToCSSFile = pathToCSSFile;
    this.setupCSS();
  }
  /** 
  * Asynchronously fetches and applies a CSS styles to the shadow DOM.
  * Fetches the reset CSS and component-specific CSS in parallel.
  * Logs an error if fetching or applying the styles fails.
  * @private
  * @async
  */
  async setupCSS() {
    try {
      const pageCSS = fetchData(this.pathToCSSFile, false);

      const styles = document.createElement('style');
      styles.textContent = `${CSSHandler.resetCSS}\n${CSSHandler.sharedCSS}\n${pageCSS}`;
      
      this.root.appendChild(styles);

    } catch (error) {
      console.error('Failed to fetch CSS files and apply styles:', error);
    }
  }
}