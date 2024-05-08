import React from "react";
import "../style.css";

export default function subCard(props) {
  return (
    <div className={props.className}>
      <div className="container">
        <h3 className="subCardHeader">{props.subCardHeader}</h3>
        <hr className="breakLine"/>
        <p className="subCardcontent">{props.subCardcontent}</p>
      </div>
    </div>
  );
}
