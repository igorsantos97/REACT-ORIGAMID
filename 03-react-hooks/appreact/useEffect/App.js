import React from 'react';
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const productPreference = localStorage.getItem('produto');
    productPreference !== 'null' && fetchProduct(productPreference);
  }, []);

  async function fetchProduct(product) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${product}`,
    );
    const json = await response.json();
    localStorage.setItem('produto', product);
    setProduto(json);
  }

  function handleClick({ target }) {
    const targetProduct = target.innerText;
    fetchProduct(targetProduct);
  }

  return (
    <div>
      <h1>Preferência: {produto && <span>{produto.id}</span>}</h1>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: '.5rem' }} onClick={handleClick}>
        smartphone
      </button>

      {produto && <Produto produto={produto} />}
    </div>
  );
};

export default App;
