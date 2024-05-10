import React from "react";

export default function Form(props){
    return (<>
         <div className="form-group">
                <input type={props.type} placeholder={props.placeholder} />
        </div>
    </>)
}