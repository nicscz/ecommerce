import * as React from 'react';
import { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Product } from '../../models/Product';
import { api } from '../../services/api';

interface ApiResponse {
  statusCode: number;
  body: {
    products: Product[];
    currentPage: number;
    totalPages: number;
    totalProducts: string;
  };
}

export default function PaginatedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    // Faz a requisição à API
    api.get<ApiResponse>(`/products?page=${currentPage}&pageSize=2`)
      .then(response => {
        const apiResponse = response.data;
        setProducts(apiResponse.body.products);
        setCurrentPage(apiResponse.body.currentPage);
        setTotalPages(apiResponse.body.totalPages);
      })
      .catch(error => {
        console.error('Erro ao obter os dados da API:', error);
      });
  }, [currentPage]); // Executa apenas uma vez ao montar o componente

  return (
    <div>
      <Stack spacing={2}>
        <Pagination
            count={totalPages}
            page={currentPage}
            variant="outlined"
            shape="rounded"
            onChange={(event, value) => {
              setCurrentPage(value);
            }}
          />
      </Stack>
    </div>
  );
}
