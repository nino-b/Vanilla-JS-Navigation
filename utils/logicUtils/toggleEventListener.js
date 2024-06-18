
/**
 * Utility function to add or remove an event listener based on the attachEvent flag.
 * @param {string} eventName - The name of the event (e.g., 'click').
 * @param {Function} callback - The event handler function.
 * @param {boolean} attachEvent - If true, attach the event listener; if false, remove the event listener.
 */
export default function toggleEventListener(eventName, callback, attachEvent) {
  if (attachEvent) {
    window.addEventListener(eventName, callback);
  } else {
    window.removeEventListener(eventName, callback);
  }
}