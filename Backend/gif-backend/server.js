const express = require('express');
const axios = require('axios');
const cors = require('cors');
const NodeCache = require('node-cache');

const app = express();
const cache = new NodeCache({ stdTTL: 3600 }); // Cache for 1 hour
const PORT = 5000;
const APIKEY = '4aWWUjXwOkoLBmoLUfQYRGS8foRhwlBa'; 

app.use(cors());
app.use(express.json());

app.get('/api/trending', async (req, res) => {
  const cacheKey = 'trending';
  const cachedTrending = cache.get(cacheKey);

  if (cachedTrending) {
    console.log('Returning cached trending GIFs');
    return res.json(cachedTrending);
  }

  try {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=25`;
    console.log('Fetching trending GIFs from Giphy API:', url);
    const response = await axios.get(url);
    const gifs = response.data.data.map((gif) => gif.images.fixed_height.url);
    cache.set(cacheKey, gifs);
    res.json(gifs);
  } catch (error) {
    console.error('Error fetching trending GIFs:', error.message);
    console.error('Error details:', error.response?.data);
    res.status(500).send('Error fetching trending GIFs');
  }
});

app.get('/api/search', async (req, res) => {
  const { q } = req.query;
  const cacheKey = `search_${q}`;
  const cachedSearch = cache.get(cacheKey);

  if (cachedSearch) {
    console.log(`Returning cached search results for query: ${q}`);
    return res.json(cachedSearch);
  }

  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=25&q=${q}`;
    console.log('Fetching search GIFs from Giphy API:', url);
    const response = await axios.get(url);
    const gifs = response.data.data.map((gif) => gif.images.fixed_height.url);
    cache.set(cacheKey, gifs);
    res.json(gifs);
  } catch (error) {
    console.error(`Error searching for GIFs with query ${q}:`, error.message);
    console.error('Error details:', error.response?.data);
    res.status(500).send('Error searching for GIFs');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
