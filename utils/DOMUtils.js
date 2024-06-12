
function queryElementGroup(identifier) {
  const group = Array.from(document.querySelectorAll(identifier));
  return group;
}

function queryElement(identifier) {
  const element = document.querySelector(identifier);
  return element
}


export { queryElementGroup, queryElement };