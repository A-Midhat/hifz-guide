import React, {useState} from "react";
import Button from "../components/Button";
import "../style.css";

export default function Counter(){
    let [count, setCount] = useState(0);
    function decrementCount(){
        if (count > 0) {
            setCount(count - 1);
        } 
    }
    function incrementCount() {
       if(count < 50) {
            setCount(count + 1);
        }
    }
    return (
        <div className="counter">
            <h2>Counter</h2>
            <div className="counter-display">
            <p className="count">{count}</p>
                <Button type="-" function={decrementCount} />
                <Button type="+" function={incrementCount} />
            </div>
        </div>
    );
}