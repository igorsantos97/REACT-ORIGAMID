import React from 'react';

function Radio({ pergunta, options, id, onChange, value, active }) {
  if (active === false) return null;
  return (
    <fieldset
      style={{
        padding: '2rem',
        marginBottom: '1rem',
        border: 'solid 2px #eee',
      }}
    >
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: '1rem', fontFamily: 'monospace' }}
        >
          <input
            value={option}
            id={id}
            checked={value === option}
            type="radio"
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
}

export default Radio;
