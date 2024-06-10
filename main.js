const url = 'http://localhost:3000/api/entries/en-us/apple';

async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
  }
};