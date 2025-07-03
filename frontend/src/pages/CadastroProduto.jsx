import React, { useState } from 'react'; // Importa os hooks do React
import { useNavigate } from 'react-router-dom'; // Permite redirecionar para outra rota após o cadastro
import api from '../api'; // Instância do Axios com baseURL configurada

/**
 * Tela de cadastro de produto.
 * Permite o usuário inserir nome e preço de um novo produto e salvar no backend.
 */

const CadastroProdutos = () => {
  // Estados locais para armazenar os valores do formulário
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');

  // Hook para navegar programaticamente entre rotas
  const navigate = useNavigate();

  // Função executada quando o formulário é enviado
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    try {
      // Envia os dados para a API (requisição POST)
      await api.post('/api/items', { name: nome, price: preco });

      // Exibe uma mensagem de sucesso
      alert('Produto cadastrado com sucesso!');

      // Redireciona o usuário para a lista de produtos
      navigate('/produtos');
    } catch (error) {
      // Exibe erro caso a requisição falhe
      console.error('Erro ao cadastrar produto:', error);
      alert('Erro ao cadastrar produto.');
    }
  };

  return (
    <div className="min-h-screen bg-darkslategray flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-darkslategray">
          Cadastrar Produto
        </h2>

        {/* Campo de entrada para o nome do produto */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-darkslategray mb-1">
            Nome do Produto
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)} // Atualiza o estado conforme o usuário digita
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen"
          />
        </div>

        {/* Campo de entrada para o preço do produto */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-darkslategray mb-1">
            Preço (R$)
          </label>
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)} // Atualiza o estado conforme o usuário digita
            required
            step="0.01"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lightgreen"
          />
        </div>

        {/* Botão de envio do formulário */}
        <button
          type="submit"
          className="w-full bg-darkslategray hover:bg-palegreen text-white py-2 rounded-lg transition duration-300 font-bold"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroProdutos; // Exporta o componente para ser usado na aplicação
