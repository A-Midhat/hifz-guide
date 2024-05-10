import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
import Button from "../components/Button";
export default function Login() {
    function handleSubmit(e) {
        e.preventDefault();
        // Handle login logic here
        console.log("Login button clicked");
    }
    return (<>
        <div className="signup-container">
            <h2>Login</h2>
            <p>Already have an account? login <Link to="/login">here</Link></p>
            <Form type="text" placeholder="username" />
            <Form type="email" placeholder="email" />
            <Form type="password" placeholder="password" />
            <Form type="password" placeholder="confirm password" />
            <hr/>
            <p>Are you hafiz?</p>
            <Form type="text" placeholder="Yes/No" /> {/* hafiz? discard the rest of the forms below: continue */}
            <p>Did you memorzie some of the Quran?<br/>if yes, how many pages?</p>
            <Form type="text" placeholder="No. pages" />
            <p>No. pages/day you want to memorzie?<br/> (1,2,3 or 4 page/day)</p>
            <Form type="text" placeholder="Memorization plan" />
            <p>Note:This is website doesn't help ...etc</p>
            <Button type="Sign up" function={handleSubmit} />
        </div>
    </>)
}
