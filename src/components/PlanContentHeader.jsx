import React from "react";

export default function PlanContentHeader(props){
    return (
        <div className="plan-item">
                <h4>{props.title}</h4>
                <p>{props.content}</p>
        </div>
    )
} 