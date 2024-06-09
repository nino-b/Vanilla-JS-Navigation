const url = 'http://localhost:3000/api/entries/en-gb/ace';

(async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
