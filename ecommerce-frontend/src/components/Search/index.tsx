import React from 'react';
import { Container } from './style';

interface SearchProps {
  icon?: React.ElementType; // Tipo para o ícone
  onSearch?: () => void; // Tipo para a função de busca
}

export function Search({ icon: Icon, onSearch }: SearchProps) {
  const handleSearch = () => {
    if (onSearch) {
      onSearch();
    }
  };

  return (
    <Container>
      <div className="search-input-container">
        <input className='inputSearch' placeholder="pesquisar produto" />
        {Icon && <Icon className="search-icon" onClick={handleSearch} />}
      </div>
    </Container>
  );
}
