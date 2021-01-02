import React from 'react';

const App = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    console.log(target.value);
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Cores</h2>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          value="azul"
          checked={cor === 'azul'}
        />
        Azul
      </label>
      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          value="vermelho"
          checked={cor === 'vermelho'}
        />
        Vermelho
      </label>

      <h2>Produtos</h2>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          value="smartphone"
          checked={produto === 'smartphone'}
        />
        Smarphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          value="notebook"
          checked={produto === 'notebook'}
        />
        Notebook
      </label>
      {produto}
      {cor}
    </form>
  );
};

export default App;
