import React from 'react';
import { Search } from "../Search"; // Certifique-se de fornecer o caminho correto
import { Container } from "./style";
import { FiSearch } from 'react-icons/fi';

interface HeaderProps {
  // Se você quiser adicionar mais props ao componente Header, pode fazer isso aqui
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <h3 className={'logo'} >mmartan</h3>
      <Search icon={FiSearch} onSearch={() => 'qualquerCoisa'} />
    </Container>
  );
}
