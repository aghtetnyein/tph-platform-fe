import React from "react";
import styles from "../../assets/Css/Form/WorkspaceButton.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = (props) => {
  var buttonStyle = props.styleType;
  return (
    <div
      className={`${
        buttonStyle === "button-fill" ? styles.buttonFill : styles.buttonOutline
      } ${props.active ? styles.active : ""}`}
      onClick={props.onClickFun}
    >
      <i>
        {props.icon === " " ? (
          ""
        ) : (
          <FontAwesomeIcon
            className={styles.iconSelf}
            icon={props.icon}
            style={{ color: props.iconColor }}
          />
        )}
      </i>

      {props.label === "" ? "" : <div>{props.label}</div>}
    </div>
  );
};

Button.defaultProps = {
  icon: " ",
  active: false,
};

export default Button;
