import queryElementGroup from "../utils/DOMUtils/queryElementGroup";
import { elements } from "../data/DOMElements"
import duplicateContent from "./duplicateContent";


class AnimationManager {
  /**
   * Creates an instance of AnimationManager class.
   * @param {HTMLElement} toggleAnimationChecbox - An element that defines whether animation will be on or off in the application. 
   */
  constructor(toggleAnimationChecbox) {
    /**
     * @param {HTMLElement} toggleAnimationChecbox - A checkbox that defines whether animations will be applied to an application or not.
     */
    this.toggleAnimationChecbox = toggleAnimationChecbox; 
    
    this.animationCheckboxListener();
  }
  /**
   * Adds an event listener to the toggle animation checkbox (in a settings dialog).
  */
  animationCheckboxListener() {
    this.toggleAnimationChecbox.addEventListener('change', this.#toggleAnimationCallback.bind(this));
  }
  /**
   * A callback function that will be executed on every change of 'this.toggleAnimationChecbox'.
   * 
   * Adds value of 'event.target.checked' (whether user checked or unchecked the checbox) to a global object. 
   * This way it is accessible for every function and when each Component is created, whether animation is enabled is taken in consideration by those Components 
   * and those Components can know about whether animations are enabled or not via this globally accessable property.
   * 
   * 'this.toggleAnimation(shouldAnimate)' actually changes animations for current page (enables or disables).
   */
  #toggleAnimationCallback(event) {
    const shouldAnimate = event.target.checked;
    app.settings.animations = shouldAnimate;
    this.toggleAnimationsAndScroll(shouldAnimate);
  }
  /**
  * It binds context to the current page, that is being rendered in the <main>. 
  * Binding context is important because it gives the function access to the page context. 
  * Which enables this code to make changes in the current page. 
  * Otherwise it wouldn't be possible, because this is a Single Page Application, 
  * each page is newly created on every route and each page has its own Shadow DOM.
  * 
  * Changes 'data-animated' values for the elements to either 'true' or 'false' - depending on whether checkbox is checked or not.
  * 
  * If user checks the checkbox, it also checks whether current page is a home page or not. 
  * If it is a home page, it also adds infinite horizontal scroll animation too, because initial page has an element that has infinite horizontal scroll,
  * and triggering that animation from this event listener is necessary because it needs to be executed every time (it is a function 'duplicateContent').
  * 
  * @param {Boolean} animate - Boolean from the checkbox that determines whether animations should or should not be executing.
  * @param {Object} [context=app.pageContext] - The context of the current page being rendered, providing access to page-specific properties and methods. 
  * The default value is directly passed as 'app.pageContext' because the value to 'app.pageContext' is reassigned every time the page changes 
  * and if I saved it in the e.g. 'this.pageContext' in the constructor, it would point to initial value of 'app.pageContext' which is 'null'.
  * 
  */
  toggleAnimationsAndScroll(animate, context = app.pageContext) {
    const boundToggleAnimations = this.#toggleAnimationName.bind(context);
    
    if (animate) {
      boundToggleAnimations('true', 'false');
    } else {
      boundToggleAnimations('false', 'true');   
      if (context.templateID === 'home-page-template') {
        duplicateContent(context);
      }
    }
  }
  /**
   * A private function that toggles 'data-animated' value for each element of specified value ('true' or 'false').
   * 
   * It gets elements from the current page. 
   * This is necessary at this step because each page is created on every navigation, 
   * and to always have valid references of DOM elements, they need to be queried every time.
   */
  #toggleAnimationName(from, to) {
    const pageEGroup = queryElementGroup(`[data-animated="${from}"]`, this.root);
    pageEGroup.forEach(element => {
      element.setAttribute('data-animated', `${to}`);
    });
  }
}

const animationManager = new AnimationManager(elements.toggleAnimation);

export default animationManager;