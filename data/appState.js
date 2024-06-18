/**
 * Central storage for the app's state.
 */

window.app = {};

/**
 * Saves 'this' context of newly created page in the global property, so other functions can interact with a page Shadow DOM.
 * Otherwise it is harder to interact with a newly created page's Shadow DOM.
 * E.g. we can turn on and off animations for that page.
 */
app.pageContext = null;

export default app;