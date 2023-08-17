import axios from "axios";
import { useQuery } from "react-query";

type Image = {
  url: string;
}

export type Product = {
  id: number;
  nome: string;
  descricao: string;
  preco_promocional: string;
  preco_original: string;
  imagens: Image[];
  categoria: string;
  created_at: string;
}

function App() {
  const { data, isLoading } = useQuery<Product[]>('products', async () => {
    const response = await axios.get('http://localhost:3000/api/products?page=1&pageSize=10');
    return response.data.body.products;
  });

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {isLoading ? <p>Loading...</p> : null}
        {data?.map(product => (
          <li key={product.id}>
            <strong>{product.nome}</strong>
            <p>{product.descricao}</p>
            <p>Price: {product.preco_promocional}</p>
            <p>Category: {product.categoria}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
