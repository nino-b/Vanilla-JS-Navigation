/**
 * Holds configuration parameters for each page. 
 * Each object will be added as a state object of each history object's entry.
 */

const pageConfig = {
  "/": {
    route: "/",
    customDOMEl: "home-page",
  },
  "/translate": {
    route: "/translate",
    customDOMEl: "translate-page",
  },
};


export default pageConfig;