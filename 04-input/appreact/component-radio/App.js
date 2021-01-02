import React from 'react';
import Radio from './Form/Radio';

const App = () => {
  const [cor, setCor] = React.useState('Vermelho');
  const [frutas, setFrutas] = React.useState('');

  return (
    <form>
      <h2>Cores</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h2>Frutas</h2>
      <Radio
        options={['Limão', 'Laranja', 'Uva']}
        value={frutas}
        setValue={setFrutas}
      />
    </form>
  );
};

export default App;
