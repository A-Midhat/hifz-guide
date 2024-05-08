import React from "react";

export default function PlanContentRow(props) {
    // create a unique id based on the label's text
    const id = `check-${props.text.replace(/\s/g, '-').toLowerCase()}`;
    return (
    <div className="planContentRow">
      <input type="checkbox" id={id} />
      <label for={id}>{props.text}</label>
    </div>
  );
}