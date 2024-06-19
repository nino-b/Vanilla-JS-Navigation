import queryElementGroup from "../utils/DOMUtils/queryElementGroup";
import queryElement from "../utils/DOMUtils/queryElement";
import { elements } from "../data/DOMElements"
import duplicateContent from "./duplicateContent";

/**
 * Gets <label for="toggle-animation"> element from DOM.
 * Its value will be changed according the currents state:
 * whether user should enable or disable animations.
 */
const checkboxLabel = queryElement('label[for="toggle-animation"]');


/**
 * Adds an event listener to the toggle animation checkbox in the settings dialog.
 * 
 * It binds context to the current page, that is being rendered in the <main>. 
 * Binding context is important because it gives the function access to the page context. 
 * Which enables this code to make changes in the current page. 
 * Otherwise it wouldn't be possible, because this is a Single Page Application, 
 * each page is newly created on every route and each page has its own Shadow DOM.
 * 
 * Changes 'data-animated' values for the elements to either 'true' or 'false' - depending on whether checkbox is checked or not,
 * changes text content of label element of this checkbox to indicate what will next action do (check or uncheck).
 * 
 * If user checks the checkbox, it also checks whether current page is a home page or not. 
 * If it is a home page, it also adds infinite horizontal scroll animation too, because initial page has an element that has infinite horizontal scroll,
 * and triggering that animation from this event listener is necessary because it needs to be executed every time (it is a function 'duplicateContent').
 */
export default (function toggleAnimation () {
  elements.toggleAnimation.addEventListener('change', event => {
    const boundToggleAnimations = _toggleAnimations.bind(app.pageContext);
  
    if (event.target.checked) {
      boundToggleAnimations('true', 'false');
      checkboxLabel.textContent = 'Enable Animations';
    } else {
      boundToggleAnimations('false', 'true');   
      if (app.pageContext.templateID === 'home-page-template') {
        duplicateContent(app.pageContext);
      }
      checkboxLabel.textContent = 'Disable Animations';
    }
  });
})();



/**
 * A private function that toggles 'data-animated' value for each element of specified value ('true' or 'false').
 */
function _toggleAnimations(from, to) {
  const pageEGroup = queryElementGroup(`[data-animated="${from}"]`, this.root);
  pageEGroup.forEach(element => {
    element.setAttribute('data-animated', `${to}`);
  });
}