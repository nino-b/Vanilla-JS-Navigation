
/**
 * A utility function to attach an event listener to one or multiple elements.
 * @param {string} eventName - The name of the event (e.g., 'click').
 * @param {Function} callback - The event handler function.
 * @param {EventTarget|EventTarget[]} [eventTarget=window] - The target(s) to attach the event listener to. Defaults to window.
 */
export default function addListeners(eventName, callback, eventTarget = window) {
  if (Array.isArray(eventTarget)) {
    eventTarget.forEach(target => {
      target.addEventListener(eventName, callback);
    });
  } else {
    eventTarget.addEventListener(eventName, callback);
  }
}