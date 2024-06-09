

const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');


// Create Express Server
const app = express();

// Config
const PORT = 3000;
const HOST = 'localhost';
const API_SERVICE_URL = 'https://od-api-sandbox.oxforddictionaries.com/api/v2';

// Add morgan middleware to logg incoming requests
app.use(morgan('dev'));










































/* 
const CrawlbaseJSToken = process.env.CB_PROXY_API_JS;
const ODAppId = process.env.OD_APP_ID;
const ODAppKey = process.env.OD_APP_KEY;

(async function example() {


  
  const url =  'https://www.dictionaryapi.com/api/v3/references/collegiate/json/voluminous?key=';
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }

})(); */




































/* 
  const url = 'https://corsproxy.io/?https://od-api-sandbox.oxforddictionaries.com/api/v2/entries/en-gb/ace';
const options = {
  method: 'GET',
  headers: {
    app_id: ODAppId,
    app_key: ODAPIKey,
    Accept: 'application/json'
  }
};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
*/

/* 
  const url = 'https://joughtred-oxford-dictionaries-v1.p.rapidapi.com/entries/%7Bsource_lang%7D/%7Bword_id%7D/examples';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f725a0e36amsh4f50008bee7acffp1d8a28jsn9de8bcb98194',
		'x-rapidapi-host': 'joughtred-oxford-dictionaries-v1.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
} */
