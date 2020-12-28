import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);

  if (!dados) return null;

  return (
    <div>
      <span style={{ marginBottom: '10px', display: 'block' }}>Produto:</span>
      {dados.map((dado) => <li key={dado.id}>{dado.nome}</li>) || (
        <p>Não há produtos</p>
      )}
    </div>
  );
};

export default Produto;
