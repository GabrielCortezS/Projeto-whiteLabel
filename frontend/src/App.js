/**
 * src/App.js
 * Este arquivo define a estrutura de rotas da aplicação.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importando as páginas criadas
import Home from './pages/Home';
import Produtos from './pages/Produtos';
import CadastroProduto from './pages/CadastroProduto';
import EditarProduto from './pages/EditarProduto';

// Importando o Navbar
import Navbar from './components/Navbar';

/**
 * Componente principal da aplicação.
 * Aqui configuramos as rotas para navegação entre as páginas.
 */
function App() {
  return (

    <Router>
      {/* Navbar estará sempre visível */}
      <Navbar />

      {/* Define as rotas da aplicação */}
      <Routes>

        {/* Rota para a página inicial */}
        <Route path="/" element={<Home />} />

        {/* Rota para a lista de produtos */}
        <Route path="/produtos" element={<Produtos />} />

        {/* Rota para cadastro de produto */}
        <Route path="/produtos/cadastrar" element={<CadastroProduto />} />

        {/* Rota para editar produto, usando parâmetro id */}
        <Route path="/produtos/editar/:id" element={<EditarProduto />} />
      </Routes>
    </Router>
  );
}

export default App;
