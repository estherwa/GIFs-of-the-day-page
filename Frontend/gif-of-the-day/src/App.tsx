import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GifList from './components/GifList/GifList.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import Store from './components/Store/Store.tsx';



const App= () => {
  const [gifs, setGifs] = useState<string[]>([]);
  const [trendingGifs, setTrendingGifs] = useState<string[]>([]);
  const [storeGifs, setStoreGifs] = useState<string[]>([]);

  useEffect(() => {
    fetchTrendingGifs();
  }, []);

  const fetchTrendingGifs = async () => {
    const response = await fetch('http://localhost:5000/api/trending');
    const data = await response.json();
    setTrendingGifs(data);
  };

  const handleSearch = async (term: string) => {
    const response = await fetch(`http://localhost:5000/api/search?q=${term}`);
    const data = await response.json();
    setGifs(data);
  };

  const handleBuy = (gif: string) => {
    setStoreGifs([...storeGifs, gif]);
  };

  return (
    <Container>
      <h1>GIF Store</h1>
      <SearchBar onSearch={handleSearch} />
      <h2>Search Results</h2>
      <GifList gifs={gifs} />
      <h2>Trending GIFs</h2>
      <GifList gifs={trendingGifs} />
      <h2>Store</h2>
      <Store gifs={storeGifs} onBuy={handleBuy} />
    </Container>
  );
};

export default App;
const Container = styled.div`
  padding: 20px;
`;