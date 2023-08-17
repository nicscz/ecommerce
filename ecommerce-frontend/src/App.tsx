import { useQuery } from "react-query"
import { ResponseBody } from "./models/Product"
import axios from "axios"

function App() {
  
  const { data, isFetching } = useQuery('product', async (): Promise<ResponseBody> => {
    const page = 1, pageSize = 10
    const response = await axios.get(`http://localhost:3000/api/products?page=${page}&pageSize=${pageSize}`)

    return response.data.body
  }) 

  return (
    <div>
      {isFetching && <p>Carregando...</p>}
      {data?.products?.map(product => (
        <div key={product.id}>
          <strong>{product.nome}</strong>
          <p>{product.descricao}</p>
          <p>Preço Promocional: R${product.preco_promocional}</p>
          <p>Preço Original: R${product.preco_original}</p>
          <p>Categoria: {product.categoria}</p>
          <p>Criado em: {product.created_at}</p>
        </div>
      ))}
    </div>
  )
}

export default App;
