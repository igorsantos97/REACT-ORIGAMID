import React from 'react';
import Home from './Screens/Home';
import Produtos from './Screens/Produtos';
import Menu from './Menu';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const { pathname } = window.location;

const App = () => {
  return (
    <>
      <Menu />
      {pathname === '/' ? <Home /> : <Produtos />}
    </>
  );
};

export default App;
