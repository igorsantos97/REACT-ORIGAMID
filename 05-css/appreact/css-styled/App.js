import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`;

const Preco = styled.p`
  /* background: ${({ cor }) => cor}; */
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: white;
`;

const Button = styled.button`
  background: ${({ ativo }) => (ativo ? '#53d956' : '#F00000')};
  color: white;
  padding: 10px 16px;
  cursor: pointer;
  outline: none;
  border: none;
  /* &:hover {
    background: tomato;
  } */
`;

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <ProdutosContainer>
        <Produto>
          <Titulo>Meu Titulo</Titulo>
          <Paragrafo>Meu texto é esse.</Paragrafo>
          <Preco cor={'lightblue'}>R$ 2000</Preco>
        </Produto>
        <Produto>
          <Titulo>Meu Titulo</Titulo>
          <Paragrafo>Meu texto é esse.</Paragrafo>
          <Preco cor={'red'}>R$ 1000</Preco>
        </Produto>
      </ProdutosContainer>
      <Button
        ativo={ativo}
        onClick={() => {
          setAtivo(!ativo);
        }}
      >
        Ativar
      </Button>
    </div>
  );
};

export default App;
