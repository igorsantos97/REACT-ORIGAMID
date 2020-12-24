// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;
  const styleAtivo = {
    color: 'green',
  };

  const total = dados.compras.reduce((acumulador, valorAtual) => {
    return acumulador + +valorAtual.preco.replace('R$ ', '');
  }, 0);

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        {dados.ativa ? (
          <span style={styleAtivo}> Ativa</span>
        ) : (
          <span style={{ color: 'red' }}> Inativo</span>
        )}
      </p>
      <p>Total gasto: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </>
  );
};

export default App;
