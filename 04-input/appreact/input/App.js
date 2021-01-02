import React from 'react';

const App = () => {
  const [message, setMessage] = React.useState('');
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage('');
    const response = await fetch(
      'https://ranekapi.origamid.dev/json/api/usuario',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      },
    );
    setMessage(response);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input id="nome" type="text" value={form.nome} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />

      <label htmlFor="senha">Senha</label>
      <input
        id="senha"
        type="password"
        value={form.senha}
        onChange={handleChange}
      />

      <label htmlFor="cep">Cep</label>
      <input id="cep" type="text" value={form.cep} onChange={handleChange} />

      <label htmlFor="rua">Rua</label>
      <input id="rua" type="text" value={form.rua} onChange={handleChange} />

      <label htmlFor="numero">Numero</label>
      <input
        id="numero"
        type="text"
        value={form.numero}
        onChange={handleChange}
      />

      <label htmlFor="bairro">Bairro</label>
      <input
        id="bairro"
        type="text"
        value={form.bairro}
        onChange={handleChange}
      />

      <label htmlFor="cidade">Cidade</label>
      <input
        id="cidade"
        type="text"
        value={form.cidade}
        onChange={handleChange}
      />

      <label htmlFor="estado">Estado</label>
      <input
        id="estado"
        type="text"
        value={form.estado}
        onChange={handleChange}
      />

      <button>Enviar</button>
      {message && message.ok && <p>Dados Enviados e Cadastrados</p>}
    </form>
  );
};

export default App;
