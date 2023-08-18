import React from 'react';
import { HeadBody } from '../../components/HeadBody';
import { Header } from '../../components/Header';
import { Body, Container } from './style';
import { ProductList } from '../../components/ProductList';

const Home = () => {
  const handleSearch = (searchText: string) => {
    console.log('Search text:', searchText);
  };

  return (
    <Container>
      <Header onSearch={handleSearch} />
      <Body>
        <HeadBody />
        <ProductList />
      </Body>
    </Container>
  );
}

export default Home;