import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

const ODAppId = process.env.OD_APP_ID;
const ODAppKey = process.env.OD_APP_KEY;


app.get('/api/:endpoint/:language/:word', async (req, res) => {
  const {endpoint, language, word} = req.params;
  const url = `https://od-api-sandbox.oxforddictionaries.com/api/v2/${endpoint}${language}/${word}`;

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
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});


app.listen(port, () => {
  console.log(`Proxy server is running on http://localhost:${port}`);
});