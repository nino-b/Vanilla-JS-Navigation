
import app from "./data/appState.js";
import router from "./services/Router.js";

/**
 * Components
 */
import HomePage from "./components/HomePage.js";


/* 
import { fetchData } from "./utils/asyncUtils.js";

async function fetchCSS(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch CSS URL: ${url}`);
  }
  return response.text();
}

const data = fetchCSS('./styles/homePage.css');
console.log('data in the main page: ', data);
console.log('hi') */