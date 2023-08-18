import React from 'react';
import { useEffect, useState } from 'react';
import { List } from './style';
import { Product } from '../../models/Product';
import { api } from '../../services/api';
import { Footer } from '../Footer';
import { Search } from '../Search';
import { FiSearch } from 'react-icons/fi';

interface ProductListProps {
  products?: Product[];
}

interface FoundedProductProps {
  totalProducts: string;
}

export function ProductList(props: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [foundedProduct, setFoundedProduct] = useState<FoundedProductProps>({ totalProducts: "0" });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchText, setSearchText] = useState<string>('');


  const fetchProducts = async (page: number, size: number, search: string = '') => {
    try {
      const response = await api.get(`/products?page=${page}&pageSize=${size}&search=${search}`);
      setFoundedProduct({ totalProducts: response.data.body.totalProducts });
      setProducts(response.data.body.products);
      setTotalPages(response.data.body.totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage, pageSize, searchText);
  }, [currentPage, pageSize, searchText]);

  const handleSearch = (search: string) => {
    setSearchText(search);
    setCurrentPage(1);
  };

  return (
    <List>
      <Search icon={FiSearch} onSearch={handleSearch} />
      <p className='totalProducts'>{foundedProduct.totalProducts} produtos encontrados</p>
      {products.map((product) => (
        <div className='productCard' key={product.id}>
          <img className='productImage' alt={''} src={product.imagens[0]} />
          <div className='tittleAndDescription'>
            <h2>{product.nome}</h2>
            <p>{product.descricao}</p>
          </div>
          <div className='productPrice'>
            <p className={'originalPrice'}>{`R$${product.preco_original}`}</p><span>por</span><p className={'promoPrice'}>{`R$${product.preco_promocional}`}</p>
          </div>
        </div>
      ))}
      <Footer paginatedProducts={{ totalPages, currentPage, setCurrentPage, fetchProducts }} productsPerPage={pageSize} />
    </List>
  );
}
