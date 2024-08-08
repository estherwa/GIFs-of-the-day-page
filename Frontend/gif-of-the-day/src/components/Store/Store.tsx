import React, { useState } from 'react';
import styled from 'styled-components';
import PaymentForm from '../PaymentForm/PaymentForm.tsx';


const Store = ({ selectedGif, onPaymentSuccess }:StoreProps) => {
  return (
    <StoreContainer>
      {selectedGif && (
        <>
          <Gif src={selectedGif} alt="selected-gif" />
          <PaymentForm onPaymentSuccess={onPaymentSuccess} />
        </>
      )}
    </StoreContainer>
  );
};

export default Store;
interface StoreProps {
  selectedGif: string | null;
  onPaymentSuccess: () => void;
}
const StoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Gif = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1em;
  margin-top: 10px;
`;
