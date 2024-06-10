import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

/**
 * Loads environment variables from a .env file into process.env
 */
dotenv.config();

/**
 * Creates a new instance of Express (framework for Node.js) application.
 */
const app = express();
/**
 * Specifying a port which will listen for incoming HTTP requests.
 */
const port = 3000;

/**
 * Environmental variables retrieved from .env.
 */
const ODAppId = process.env.OD_APP_ID;
const ODAppKey = process.env.OD_APP_KEY;

/**
 * Enables Cross-Origin Resource Sharing in our Express application.
 * 
 * 'cors' package was added as a middleware to enable CORS and allow all domains to access the API.
 */
app.use(cors());

/**
 * app.get() - Defines a route that responds to HTTP GET request. This route parameters includes some dynamic parameters (':endpoint/:language/:word').
 * 
 * '/api/:endpoint/:language/:word' - This is the route path. The colon (':') before indicates that these are dynamic route parameters.
 * 
 * async (req, res) - An asynchronous route handler function that takes two arguments: 'req' - the request object; 'res' - the response object.
 * 
 * It sets up request Options (custom header).
 * Sets Try-Catch block to handle errors that may occur.
 * Makes a fetch request, if the response is not succesful - it logs an error; otherwise it parses the JSON body of the response and sends data back to the client. 
 * 
 * If the response is not succesful, it parses the response and sends the message to the client.
 * 
 * @param {string} endpoint - The API endpoint (e.g., 'entries').
 * @param {string} language - The language code (e.g., 'en-us').
 * @param {string} word - The word to look up.
 * @returns {Promise<Object>} - The response data from the Oxford Dictionaries API.
 */
app.get('/api/:endpoint/:language/:word', async (req, res) => {
  const {endpoint, language, word} = req.params;
  const url = `https://od-api-sandbox.oxforddictionaries.com/api/v2/${endpoint}/${language}/${word}`;

  const options = {
    method: 'GET',
    headers: {
      app_id: ODAppId,
      app_key: ODAppKey,
      Accept: 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    res.json(data); // Send the data back to the client
    return data;
  } catch (error) {
    res.status(500).json({ error: error.message }); // Send error response
  }
});