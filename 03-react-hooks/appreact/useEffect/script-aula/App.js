import React from 'react';
import Produto from './Produto';

const App = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div>
      {modal && <Produto />}
      <button onClick={() => setModal(!modal)}>Ativar</button>
    </div>
  );
};

export default App;
