import queryElementGroup from "../utils/DOMUtils/queryElementGroup";
import { elements } from "../data/DOMElements"
import setInfiniteScroll from "./setInfiniteScroll";


export default function addInfiniteScroll(context) {
  const scrollers = queryElementGroup('.scroller', context); 
  console.log('scrollers', scrollers);
  setInfiniteScroll(scrollers);
}


elements.enableAnimation.addEventListener('change', event => {
  const boundToggleAnimations = _toggleAnimations.bind(app.pageContext);

  if (event.target.checked) {
    boundToggleAnimations('true', 'false');
    addInfiniteScroll(app.pageContext);
    console.log('anim on');
  } else {
    boundToggleAnimations('false', 'true');
    console.log('anim off');
  }
});




function _toggleAnimations(from, to) {
  console.log('from', from);
  const pageEGroup = queryElementGroup(`[data-animated="${from}"]`, this.root);
  console.log('pageEGroup', pageEGroup);
  pageEGroup.forEach(element => {
    element.setAttribute('data-animated', `${to}`);
    console.log('anim data val: ', element.dataset.animated);
  });
}