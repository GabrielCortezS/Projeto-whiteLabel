import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-darkslategray flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-darkslategray drop-shadow">
          Bem-vindo ao Sistema de Farmácia
        </h1>
        <p className="text-darkslategray mb-8">
          Gerencie seus produtos com simplicidade, agilidade e um visual agradável.
        </p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/produtos')}
            className="bg-darkslategray text-white px-5 py-2 rounded shadow hover:bg-slate-800 transition"
          >
            Ver Produtos
          </button>
          <button
            onClick={() => navigate('/produtos/cadastrar')}
            className="bg-darkslategray text-white px-5 py-2 rounded shadow hover:bg-slate-800 transition"
          >
            Cadastrar Produto
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
