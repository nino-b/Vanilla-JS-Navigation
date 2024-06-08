
const oxfordDictionariesAPIKey = process.env.OXFORD_DICTIONARIES_API_KEY;



(async function example() {

  const app_id = 'abacd18c';
  const app_key = oxfordDictionariesAPIKey;
  const language_code = 'en-us';
  const word_id = 'apple';
  const endpoint = `entries`;
  
  const url = `https://corsproxy.io/?https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${word_id.toLowerCase()}`;

  const options = {
    method: 'GET',
    headers: {
      'app_id': app_id,
      'app_key': app_key
    }
  };

  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
})();
