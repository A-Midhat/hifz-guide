import React from "react";
import Button from "../components/Button";
import "../style.css";

export default function Counter(){
    return (
        <div className="counter">
            <h2>Counter</h2>
            <div className="counter-display">
            <p className="count">0</p>
                <Button type="-" />
                <Button type="+" />
            </div>
        </div>
    );
}