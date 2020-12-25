import React from 'react';
import Titulo from '../Components/Titulo';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const sectionStyle = {
  border: 'solid 1px',
  padding: '1rem .5rem',
  marginBottom: '1rem',
};

const Produtos = () => {
  return (
    <>
      <Titulo titulo="Produtos" />
      {produtos.map(({ nome, propriedades }) => (
        <section key={nome} style={sectionStyle}>
          <p>{nome}</p>
          <ul>
            {propriedades.map((propriedade) => (
              <li>{propriedade}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
};

export default Produtos;
