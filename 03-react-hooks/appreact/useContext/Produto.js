import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const { dados, limparDados } = React.useContext(GlobalContext);

  function handleClick() {
    limparDados();
  }

  return (
    <div>
      <span style={{ marginBottom: '10px', display: 'block' }}>Produto:</span>
      {(dados && dados.map((dado) => <li key={dado.id}>{dado.nome}</li>)) || (
        <p>Não há produtos</p>
      )}
      <button onClick={handleClick}>Limpar Produtos</button>
    </div>
  );
};

export default Produto;
