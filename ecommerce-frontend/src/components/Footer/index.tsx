import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { Pagination, Stack } from '@mui/material';

interface FooterProps {
  productsPerPage: number;
  paginatedProducts: {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (value: number) => void;
    fetchProducts: (page: number, size: number) => void;
  };
}

export function Footer(props: FooterProps) {
  const { productsPerPage, paginatedProducts } = props;
  const [selectedProductsPerPage, setSelectedProductsPerPage] = useState(productsPerPage);

  const handleProductsPerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    setSelectedProductsPerPage(selectedValue);
    paginatedProducts.fetchProducts(1, selectedValue);
  };

  useEffect(() => {
    setSelectedProductsPerPage(productsPerPage);
  }, [productsPerPage]);

  return (
    <Container>
      <div className="dropdown">
        <label htmlFor="productsPerPage">Produtos por página:</label>
        <select
          id="productsPerPage"
          name="productsPerPage"
          value={selectedProductsPerPage}
          onChange={handleProductsPerPageChange}
        >
          <option value={5}>5</option>
          <option value={8}>8</option>
          <option value={10}>10</option>
          <option value={12}>12</option>
          <option value={15}>15</option>
        </select>
      </div>
      <Stack spacing={2} style={{ marginTop: '20px' }}>
        <Pagination
          count={paginatedProducts.totalPages}
          page={paginatedProducts.currentPage}
          variant="outlined"
          shape="rounded"
          onChange={(_event, value) => {
            paginatedProducts.setCurrentPage(value);
          }}
        />
      </Stack>
    </Container>
  );
}
