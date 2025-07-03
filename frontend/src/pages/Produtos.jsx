import React, { useEffect, useState } from "react"; // Importa os hooks do React
import { useNavigate } from "react-router-dom";     // Hook para navegação entre rotas
import api from '../api';                           // Importa o Axios configurado para chamadas HTTP

/**
 * Página que lista todos os produtos cadastrados na farmácia.
 * Aqui mostramos os produtos com botões de edição e exclusão.
 */

const Produtos = () => {
  const [produtos, setProdutos] = useState([]); // Estado para armazenar a lista de produtos
  const navigate = useNavigate();               // Instância do hook para redirecionamento de rotas

  // Executa ao carregar o componente (equivalente ao componentDidMount)
  useEffect(() => {
    buscarProdutos(); // Chama a função para buscar os produtos da API
  }, []);

  // Função assíncrona que busca os produtos no backend
  const buscarProdutos = async () => {
    try {
      const response = await api.get('/');        // Requisição GET para listar os produtos
      setProdutos(response.data);                 // Atualiza o estado com os dados recebidos
    } catch (error) {
      console.error('Erro ao buscar produtos:', error); // Mostra erro caso a requisição falhe
    }
  };

  // Função para deletar um produto pelo ID
  const deletarProduto = async (id) => {
    const confirm = window.confirm("Tem certeza que deseja excluir este produto?"); // Confirmação do usuário
    if (!confirm) return; // Se cancelar, não faz nada

    try {
      await api.delete(`/${id}`); // Requisição DELETE para remover o produto
      buscarProdutos();           // Atualiza a lista após deletar
    } catch (error) {
      console.error('Erro ao deletar produto:', error); // Mostra erro se falhar
    }
  };

  // Função para redirecionar à página de edição com o ID do produto
  const editarProduto = (id) => {
    navigate(`/produtos/editar/${id}`); // Redireciona para a rota de edição com o ID
  };

 return (
    <div className="min-h-screen bg-darkslategray text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-springgreen">Produtos Cadastrados</h1>

      <div className="bg-white rounded-lg shadow p-4">
        <ul className="divide-y divide-gray-300">
          {produtos.map((produto) => (
            <li key={produto._id} className="flex justify-between items-center py-2">
              <span className="text-darkslategray font-medium">{produto.name}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => editarProduto(produto._id)}
                  className="bg-darkslategray hover:bg-palegreen text-white px-3 py-1 rounded"
                >
                  Editar
                </button>
                <button
                  onClick={() => deletarProduto(produto._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Produtos; // Exporta o componente para uso em outras partes da aplicação
