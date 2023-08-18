import { useState, useEffect } from 'react';
import { HeadBody } from '../../components/HeadBody';
import { Header } from '../../components/Header';
import { Body, Container } from './style';
import { ProductList } from '../../components/ProductList';
import { api } from '../../services/api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSearch = async (searchText: string) => {
    const encodedSearchText = encodeURIComponent(searchText); // Codificar o valor

    setSearchText(encodedSearchText);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchText) {
        try {
          const response = await api.get(`/productByName?name=${searchText}`)
          
          setProducts(response.data.body);
        } catch (error) {
          console.error('Erro na requisição:', error);
        }
      }
    };

    fetchData();
  }, [searchText]);

  return (
    <Container>
      <Header onSearch={handleSearch} />
      <Body>
        <HeadBody />
        <ProductList products={products} />
      </Body>
    </Container>
  );
}

export default Home;
