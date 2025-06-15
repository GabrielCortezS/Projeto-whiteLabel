import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';




/**
 * Página de cadastro de produtos.
 * Permite incluir novos medicamentos ou produtos na farmácia.
 */

/**
 * Tela de cadastro de produto com layout moderno e estilizado.
 */

const CadastroProdutos = () =>{
    const[nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const navigate = useNavigate();

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/items', { name: nome, price: preco });
      alert('Produto cadastrado com sucesso!');
      navigate('/produtos');
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      alert('Erro ao cadastrar produto.');
    }
  };


    return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Cadastrar Produto
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Botão */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-medium"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroProdutos;