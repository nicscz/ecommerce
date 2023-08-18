import React from 'react';
import { HeadBody } from '../../components/HeadBody';
import { Header } from '../../components/Header';
import { Body, Container } from './style';
import { ProductList } from '../../components/ProductList';

const Home = () => {
  return (
    <Container>
      <Header />
      <Body>
        <HeadBody />
        <ProductList/>
      </Body>
    </Container>
  );
}

export default Home;
