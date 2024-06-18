
// const scrollers = document.querySelectorAll('.scroller');

/**
 * exports a function so that parser will look into this file and execute the if statement
 */
 export default function setInfiniteScroll(scrollerList) {
  scrollerList.forEach(scroller => {
    if (scroller.dataset.animated !== "false") {
      //scroller.setAttribute('data-animated', true);

      const scrollerInner = scroller.querySelector('.scroller-inner');
      const scrollerContent = Array.from(scrollerInner.children);

      scrollerContent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
      });
    }
  });
}