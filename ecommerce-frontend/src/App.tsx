import { useState } from 'react';
import ProductList, { Product } from './components/ProductList';
import axios from 'axios';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const response = await axios.post(
        'http://localhost:3000/api/productByName',
        {
          name: searchTerm,
        }
      );
      setSearchResults(response.data.body);
    } catch (error) {
      console.error('Error searching for products:', error);
    }
  };

  return (
    <div>
      <header>
        <h1>MMartan</h1>
        <div>
          <input
            type="text"
            placeholder="Buscar por nome do produto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Buscar</button>
        </div>
      </header>
      <main>
        <ProductList products={searchResults.length > 0 ? searchResults : null} />
      </main>
    </div>
  );
}

export default App;
