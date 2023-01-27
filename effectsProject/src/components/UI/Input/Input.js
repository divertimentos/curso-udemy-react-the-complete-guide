import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  return (

    <div
      className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type || 'input'}
        value={props.value}
        id={props.id}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
}

export default Input;
