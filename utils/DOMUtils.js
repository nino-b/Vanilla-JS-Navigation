
/**
 * Queries a group of elements from a specified context.
 * 
 * @param {String} identifier - identifier string for a group of elements (class, ID, tag name...).
 * @param {ParentNode} [context=document] - An optional parameter specifying the context in which to search for the elements. Defaults to the entire document.
 * @returns {Element[]} An array of elements that match the provided identifier within the specified context. 
 */
function queryElementGroup(identifier, context = document) {
  const group = Array.from(context.querySelectorAll(identifier));
  return group;
}

/**
 * Queries an element from a specified context.
 * 
 * @param {String} identifier - identifier string for an element (class, ID, tag name...).
 * @param {ParentNode} [context=document] - An optional parameter specifying the context in which to search for the elements. Defaults to the entire document.
 * @returns {Element} An element that matched the provided identifier within the specified context. 
 */
function queryElement(identifier, context = document) {
  const element = context.querySelector(identifier);
  return element
}


/**
 * Removes an event listener from elements in the array.
 * 
 * @param {Array} elements - A list of elements, event listeners to be removed from.
 */
function removeListeners(elements) {
  elements.forEach(element => {
    element.removeEventListener();
  });
}

export { queryElementGroup, queryElement,
         removeListeners
 };