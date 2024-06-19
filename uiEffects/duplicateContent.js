import queryElementGroup from "../utils/DOMUtils/queryElementGroup";
import queryElement from "../utils/DOMUtils/queryElement";

/**
 * Duplicates content for infinite horizontal scroll animation on a group of element with a class '.scroller'.
 * 
 * This function finds all elements with the class 'scroller' within the given context.
 * For each scroller, if the `data-animated` attribute is not set to "false",
 * it duplicates each child of the '.scroller-inner' element and appends the duplicate
 * to the '.scroller-inner' element. The duplicated items are marked as `aria-hidden`.
 *
 * @param {HTMLElement} context - The root element within which to search for scroller elements.
 */
 export default function duplicateContent(context) {
  const scrollerList = queryElementGroup('.scroller', context); 

  scrollerList.forEach(scroller => {
    if (scroller.dataset.animated !== "false") {

      const scrollerInner = queryElement('.scroller-inner', scroller);
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  });
}