import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GifList from './components/GifList/GifList.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';
import Store from './components/Store/Store.tsx';



const App: React.FC = () => {
  const [gifs, setGifs] = useState<string[]>([]);
  const [trendingGifs, setTrendingGifs] = useState<string[]>([]);
  const [storeGifs, setStoreGifs] = useState<string[]>([]);

  useEffect(() => {

    fetchTrendingGifs();
  }, []);

  const fetchTrendingGifs = async () => {
    const response = await fetch('https://developers.giphy.com');
    const data = await response.json();
    setTrendingGifs(data.data.map((gif: any) => gif.images.fixed_height.url));
  };

  const handleSearch = async (term: string) => {
    const response = await fetch('https://developers.giphy.com'); // TODO CHNAGE
    const data = await response.json();
    setGifs(data.data.map((gif: any) => gif.images.fixed_height.url));
  };

  const handleBuy = (gif: string) => {

    //TODO
    //setStoreGifs([...storeGifs, gif]);
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