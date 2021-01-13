import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button style={{ width: props.width, height: `${props.width / 3}px` }}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  width: 290,
  margin: PropTypes.string,
};

Button.protoType = {
  width: PropTypes.number.isRequired,
  margin: PropTypes.string,
};

export default Button;
