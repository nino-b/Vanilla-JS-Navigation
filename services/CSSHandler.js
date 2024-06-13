import { fetchData } from "../utils/asyncUtils";


/**
 * Class responsible for handling the fetching and application of CSS styles.
*/

export default class CSSHandler {
  /**
   * Fetched reset and shared CSS styles' files.
   */
  static async resetCSS() {
    return import('../styles/reset.css').then(module => module.default);
  }
  static async sharedCSS() {
    return import('../styles/sharedStyles.css').then(module => module.default);
  }

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
      console.log('Fetching CSS from:', this.pathToCSSFile);
      const pageCSS = await import('../styles/homePage.css').then(module => module.default);
      console.log('Fetched CSS content:', pageCSS);

      const resetCSS = await CSSHandler.resetCSS();
      const sharedCSS = await CSSHandler.sharedCSS();
      const styles = document.createElement('style');
      styles.textContent = `${resetCSS}\n${sharedCSS}\n${pageCSS}`;

      console.log('Final CSS:', styles.textContent);

      this.root.appendChild(styles);
      console.log('Styles appended to shadow root');
    } catch (error) {
      console.error('Failed to fetch CSS files and apply styles:', error);
    }
  }
}