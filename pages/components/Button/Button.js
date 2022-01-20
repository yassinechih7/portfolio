import React from "react";
import styles from './Button.module.css';

function Button(props) {
  return <div className={styles.Button}>
      <button

      name={props.name}
      type={props.type}
      onClick={props.OnClick}
      >
      {props.text}
      </button>
  </div>;
}

export default Button;
