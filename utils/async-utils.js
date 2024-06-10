const url = 'http://localhost:3000/api/entries/en-us/apple';

/**
 * Fetches the data from specified URL.
 * @returns {Promise<Object|undefined} The response data from the fetch request, or undefined if an error occurs.
 * 
 * Sets Try-Catch block to handle errors that may occur.
 * Makes a fetch request, 
 * if the response is not succesful - it logs an error; 
 * otherwise it parses the JSON body of the response and returns it. 
 */
async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};