

async function fetchLangList(url) {
  try {
    const response = await fetch('http://localhost:3000/api/languages');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('data', data)
  } catch (error) {
    console.error('Error fetching languages:', error);
  }
}