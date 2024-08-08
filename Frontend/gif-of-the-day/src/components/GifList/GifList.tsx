import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Gif = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
  border: 2px solid transparent;
  
  &:hover {
    border: 2px solid #4CAF50;
  }
`;

interface GifListProps {
  gifs: string[];
  onSelect: (gif: string) => void;
}

const GifList: React.FC<GifListProps> = ({ gifs, onSelect }) => {
  return (
    <ListContainer>
      {gifs.map((gif, index) => (
        <Gif key={index} src={gif} alt={`gif-${index}`} onClick={() => onSelect(gif)} />
      ))}
    </ListContainer>
  );
};

export default GifList;
