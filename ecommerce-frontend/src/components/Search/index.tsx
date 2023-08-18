import React, { useState } from 'react';
import { Container } from './style';

export interface SearchProps {
  icon?: React.ElementType; // Tipo para o ícone
  onSearch?: (searchText: string) => void;
}

export function Search({ icon: Icon, onSearch }: SearchProps) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchText);
    }
  };

  return (
    <Container>
      <div className="search-input-container">
        <input
          className='inputSearch'
          placeholder="pesquisar produto"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {Icon && <Icon className="search-icon" onClick={handleSearch} />}
      </div>
    </Container>
  );
}

