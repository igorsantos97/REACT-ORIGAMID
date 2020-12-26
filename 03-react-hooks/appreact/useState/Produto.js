import React from 'react';

const Produto = ({ dados }) => {
  const { id, nome, preco, fotos } = dados;

  return (
    <div>
      <h1>{nome}</h1>
      <p>R$ {preco}</p>
      <img src={fotos[0].src} alt={id} />
    </div>
  );
};

export default Produto;
