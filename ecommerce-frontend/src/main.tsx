import React from 'react'
import { queryClient } from './services/queryClient'
import ReactDOM from 'react-dom';
import App from './App.tsx'
import { QueryClientProvider } from 'react-query'



ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
