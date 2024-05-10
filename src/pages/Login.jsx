import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import Button from "../components/Button";

export default function Login(props) {
    function handleSubmit(e) {
        e.preventDefault();
        // Handle login logic here
        console.log("Login button clicked");
    }
    return (<>
        <div className="login-container">
            <h2>Login</h2>
            <p>Doesn't have an account? signup now <Link to="/signup">here</Link></p>
            <Form type="email" placeholder="username" />
            <Form type="password" placeholder="password" />
            <Button type="Login" function={handleSubmit} />
        </div>
    </>)
}
