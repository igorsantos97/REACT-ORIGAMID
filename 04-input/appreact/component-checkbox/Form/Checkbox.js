import React from 'react';

function Checkbox({ options, value, setValue, ...props }) {
  function handleChange({ target }) {
    console.log(target.value);
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
            {...props}
          />
          {option}
        </label>
      ))}
    </>
  );
}

export default Checkbox;
