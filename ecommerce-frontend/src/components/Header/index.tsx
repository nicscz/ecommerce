import React, { useState } from 'react';
import { Container } from "./style";
import { FiSearch } from 'react-icons/fi';
import { Search } from '../Search';

interface HeaderProps {
  onSearch: (searchText: string) => void;
}

export function Header(props: HeaderProps) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    props.onSearch(searchText);
  };

  const handleSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <Container>
      
      <h3 className={'logo'}>mmartan</h3>
      <Search/>
    </Container>
  );
}

