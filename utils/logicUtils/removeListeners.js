

/**
 * A utility function to remove an event listener from one or multiple elements.
 * @param {string} eventName - The name of the event (e.g., 'click').
 * @param {Function} callback - The event handler function.
 * @param {EventTarget|EventTarget[]} [eventTarget=window] - The target(s) to remove the event listener from. Defaults to window.
 */
export default function removeListeners(eventName, callback, eventTarget = window) {
  if (Array.isArray(eventTarget)) {
    eventTarget.forEach(target => {
      target.removeEventListener(eventName, callback);
    });
  } else {
    eventTarget.removeEventListener(eventName, callback);
  }
}