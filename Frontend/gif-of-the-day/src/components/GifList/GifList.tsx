import React from 'react';
import styled from 'styled-components';


const GifList = ({ gifs }: GifListProps) => {
  return (
    <Container>
      {gifs.map((gif, index) => (
        <Gif key={index} src={gif} alt={`gif-${index}`} />
      ))}
    </Container>
  );
};

export default GifList;


interface GifListProps {
    gifs: string[];
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Gif = styled.img`
  width: 150px;
  height: 150px;
`;