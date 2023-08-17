export type Image = {
  url: string;
};

export type Product = {
  id: number;
  nome: string;
  descricao: string;
  preco_promocional: string;
  preco_original: string;
  imagens: Image[];
  categoria: string;
  created_at: string;
};

interface ProductListProps {
  products: Product[] | null;
}

function ProductList({ products }: ProductListProps) {
  return (
    <div>
      <h1>Lista de Produtos</h1>
      {products === null ? (
        <p>Nenhum resultado encontrado.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <strong>{product.nome}</strong>
                <p>{product.descricao}</p>
                <p>Preço: {product.preco_promocional}</p>
                <p>Categoria: {product.categoria}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
