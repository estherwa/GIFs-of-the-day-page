import React, { useState } from 'react';
import styled from 'styled-components';


const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [term, setTerm] = useState('');

  const handleSearch = () => {
    onSearch(term);
  };

  return (
    <Container>
      <Input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>
    </Container>
  );
};

export default SearchBar;
const Container = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  margin-left: 10px;
`;

interface SearchBarProps {
  onSearch: (term: string) => void;
}
