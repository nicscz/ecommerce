export type Imagem = {
    url: string;
};
  
export type Product = {
    id: number;
    nome: string;
    descricao: string;
    preco_promocional: string;
    preco_original: string;
    imagens: Imagem[];
    categoria: string;
    created_at: string;
};
  
export type ResponseBody = {
    products: Product[];
    currentPage: number;
    totalPages: number;
    totalProducts: string;
};
  
export type ApiResponse = {
    statusCode: number;
    body: ResponseBody;
};