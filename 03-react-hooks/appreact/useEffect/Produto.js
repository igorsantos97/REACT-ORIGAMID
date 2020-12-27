import React from 'react';

const Produto = ({ produto }) => {
  const { nome, preco } = produto;

  return (
    <div>
      <h1>{nome}</h1>
      <p>R$ {preco}</p>
    </div>
  );
};

export default Produto;
