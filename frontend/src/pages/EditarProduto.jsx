// frontend/src/pages/EditarProduto.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api';

/**
 * Tela para edição de um produto já existente.
 * Permite alterar o nome e o preço e salvar a atualização no backend.
 */

const EditarProduto = () => {
  const { id } = useParams(); // Pega o ID do produto pela URL
  const navigate = useNavigate(); // Para redirecionar após salvar

  const [nome, setNome] = useState(''); // Estado para o nome do produto
  const [preco, setPreco] = useState(''); // Estado para o preço do produto

  // Carrega os dados do produto ao abrir a página
  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await api.get(`/api/items/${id}`);
        setNome(response.data.name);
        setPreco(response.data.price);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
        alert('Erro ao carregar produto.');
      }
    };
    fetchProduto();
  }, [id]);

  // Envia os dados atualizados para a API
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/items/${id}`, { name: nome, price: preco });
      alert('Produto atualizado com sucesso!');
      navigate('/produtos');
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
      alert('Erro ao atualizar produto.');
    }
  };

  return (
    <div className="min-h-screen bg-darkslategray flex items-center justify-center px-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Editar Produto
        </h2>

        {/* Campo Nome */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nome do Produto
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring"
          />
        </div>

        {/* Campo Preço */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preço (R$)
          </label>
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
            step="0.01"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring"
          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-darkslategray text-white py-2 rounded-lg hover:bg-palegreen transition duration-300 font-medium"
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
};

export default EditarProduto;
