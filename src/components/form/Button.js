import React from "react";
import styles from "../../Assets/Css/Form/Button.module.css";

const Button = (props) => {
  var buttonStyle = props.styleType;
  return (
    <>
      <button
        className={`${
          buttonStyle === "button-fill"
            ? styles.buttonFill
            : styles.buttonOutline
        }`}
        style={{ backgroundColor: props.buttonBackground }}
        onClick={props.handleClick}
      >
        {props.label}
      </button>
    </>
  );
};

export default Button;
