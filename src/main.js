
import app from "../data/appState.js";
import router from "../services/Router.js";

/**
 * Components
 */
import HomePage from "../components/HomePage.js";


const dictionary = process.env.MERRIAM_DICTIONARY_API_KEY 
const word = 'voluminousness';



async function fetchLangList(url) {
  try {
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${dictionary}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('data', data)
  } catch (error) {
    console.error('Error fetching languages:', error);
  }
};