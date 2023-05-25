import React from 'react';
import '../styles/Button.css';


export default function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  );
}