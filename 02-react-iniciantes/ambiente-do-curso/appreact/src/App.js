import React from 'react';
import Home from './Screens/Home';
import Produtos from './Screens/Produtos';
import Menu from './Menu';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <section>
      <Menu />
      <Component />
    </section>
  );
};

export default App;
