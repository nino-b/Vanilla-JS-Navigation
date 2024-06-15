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
  "/games": {
    route: "/games",
    customDOMEl: "games-page",
  },
  "/vocabulary": {
    route: "/vocabulary",
    customDOMEl: "vocabulary-page",
  },
  "/grammar": {
    route: "/grammar",
    customDOMEl: "grammar-page",
  },
  "/saved": {
    route: "/saved",
    customDOMEl: "saved-page",
  },
  "/search-history": {
    route: "/search-history",
    customDOMEl: "search-history-page",
  },
  "/about": {
    route: "/about",
    customDOMEl: "about-page",
  },
  "/settings": {
    route: "/settings",
    customDOMEl: "settings-page",
  },
};


export default pageConfig;