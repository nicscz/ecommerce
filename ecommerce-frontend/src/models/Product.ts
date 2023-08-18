export type Product = {
    id?: number;
    nome: string;
    descricao: string;
    preco_promocional: string;
    preco_original: string;
    imagens: string[];
    categoria: string;
    created_at?: string;
};
  
export type ResponseBody = {
    products: Product[];
    currentPage: number;
    totalPages: number;
    totalProducts: string;
};

export interface ApiResponse {
    statusCode: number;
    body: {
      products: Product[];
      currentPage: number;
      totalPages: number;
      totalProducts: string;
    };
  }
