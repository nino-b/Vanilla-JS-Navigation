

/**
 * Removes an event listener from elements in the array.
 * 
 * @param {Array} elements - A list of elements, event listeners to be removed from.
 */
export default function removeListeners(elements) {
  elements.forEach(element => {
    element.removeEventListener();
  });
}