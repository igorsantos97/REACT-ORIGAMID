import React from 'react';
import { GlobalContext } from './GlobalContext';

const Limpar = () => {
  const { limparDados } = React.useContext(GlobalContext);

  function handleClick() {
    limparDados();
  }

  return <button onClick={handleClick}>Limpar Produtos</button>;
};

export default Limpar;
