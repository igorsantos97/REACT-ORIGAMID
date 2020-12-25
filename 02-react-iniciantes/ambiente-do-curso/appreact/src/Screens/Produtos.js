import React from 'react';
import Produto from '../Components/Produto';
import Titulo from '../Components/Titulo';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <>
      <Titulo titulo="Produtos" />

      {produtos.map((produto) => (
        <Produto key={produto.nome} {...produto} />
      ))}
    </>
  );
};

export default Produtos;
