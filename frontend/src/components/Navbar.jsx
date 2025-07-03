// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Navbar
 * Exibe a barra de navegação com links para as páginas principais.
 * Inclui um menu mobile com toggle (hambúrguer).
 */
function Navbar() {
  // Estado para controlar a abertura do menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  // Alterna a visibilidade do menu mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      {/* Container principal da navbar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Nome/logo da aplicação */}
        <Link to="/" className="text-lg font-bold text-primaryDark">
          Farmácia
        </Link>

        {/* Menu desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primaryDark transition">
            Home
          </Link>
          <Link to="/produtos" className="text-gray-700 hover:text-primaryDark transition">
            Produtos
          </Link>
          <Link to="/produtos/cadastrar" className="text-gray-700 hover:text-primaryDark transition">
            Cadastrar
          </Link>
        </div>

        {/* Botão de menu mobile (hambúrguer) visível apenas em telas pequenas */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menu mobile: exibido apenas se menuOpen for true */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 transition-all duration-300 ease-in-out">
          <Link to="/" className="block py-2 text-gray-700 hover:text-primaryDark">
            Home
          </Link>
          <Link to="/produtos" className="block py-2 text-gray-700 hover:text-primaryDark">
            Produtos
          </Link>
          <Link to="/produtos/cadastrar" className="block py-2 text-gray-700 hover:text-primaryDark">
            Cadastrar
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
