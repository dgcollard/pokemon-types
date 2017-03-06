import React from 'react';
import bem from 'bem-cn';
import './TypeButton.css';

const block = bem('type-button');

const TypeButton = ({type, selected, ...props}) => {
  const className = block({
    type: type.key
  }).state({
    selected
  });

  return (
    <button className={className} {...props}>
      {type.label}
    </button>
  );
};

export default TypeButton;
