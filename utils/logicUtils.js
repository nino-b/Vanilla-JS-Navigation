
/**
 * A function responsible for handling fetching and setting up a HTML template.
 * 
 * Sets up the template by fetching it from the DOM and appending it to the shadow DOM.
 * Logs an error if the template ID is not provided or if the template cannot be found.
 * 
 * @param {ShadowRoot} root - The root element where the template will be applied.
 * @param {string} templateID - The ID of the HTML template element to fetch.
 */

function setUpTemplate(root, templateID) {
  if (!templateID) {
    console.error(`Template ID is not provided or does not have a valid value`);
    return;
  }

  const template = document.getElementById(templateID);
  if (!template) {
    console.error(`Problem with fetching page template from DOM.`);
    return;
  }

  const content = template.content.cloneNode(true);
  root.appendChild(content);
}

/* ********************************************************************************************* */

/**
 * Utility function to add or remove an event listener based on the attachEvent flag.
 * @param {string} eventName - The name of the event (e.g., 'click').
 * @param {Function} callback - The event handler function.
 * @param {boolean} attachEvent - If true, attach the event listener; if false, remove the event listener.
 */
function toggleEventListener(eventName, callback, attachEvent) {
  if (attachEvent) {
    window.addEventListener(eventName, callback);
  } else {
    window.removeEventListener(eventName, callback);
  }
}

/* ********************************************************************************************* */


export { setUpTemplate, toggleEventListener }