import React from 'react';
import styled from 'styled-components';


const Store = ({ gifs, onBuy }:StoreProps) => {
  return (
    <Container>
      {gifs.map((gif, index) => (
        <Item key={index}>
          <img src={gif} alt={`gif-${index}`} width="150" height="150" />
          <Button onClick={() => onBuy(gif)}>Buy</Button>
        </Item>
        
      ))}
    </Container>
  );
};

export default Store;

interface StoreProps {
  gifs: string[];
  onBuy: (gif: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Item = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  width: 200px;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;