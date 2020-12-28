import React from 'react';

const App = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificacao, setNotificao] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificao('Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificao(null);
      console.log('teste');
    }, 2000);
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );

  // const [comentarios, setComentarios] = React.useState(['Teste']);
  // const [input, setInput] = React.useState('');
  // const inputText = React.useRef();

  // function handleClick() {
  //   setComentarios([...comentarios, input]);
  //   setInput('');
  //   inputText.current.focus();
  // }

  // return (
  //   <div>
  //     <ul>
  //       {comentarios.map((comentario) => (
  //         <li key={comentario}>{comentario}</li>
  //       ))}
  //     </ul>
  //     <input
  //       ref={inputText}
  //       type="text"
  //       value={input}
  //       onChange={({ target }) => setInput(target.value)}
  //     />
  //     <br />
  //     <button onClick={handleClick}>Enviar</button>
  //   </div>
  // );
};

export default App;
