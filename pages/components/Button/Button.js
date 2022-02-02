import React, {useState} from "react";
import styles from './Button.module.css';

function Button(props) {

  const [buttonState, toggleButton] = useState(1);
  const [buttonMode, setButtonMode] = useState("active");

  const handleToggle = () => {
    buttonState ? toggleButton(0): toggleButton(1)  
    buttonMode == "active" ? setButtonMode("disabled"): setButtonMode("active")  
  }


  return (
  <div className={styles.Button +" "+ styles.buttonMode}>
      <button

      name={props.name}
      type={props.type}
      onClick={() => {
        props.OnClick
        handleToggle()
      }}
      >
      {props.text}

      </button>
  </div>
  )}

export default Button;
