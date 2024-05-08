// this should render before any user login/signup.

import React from "react";
import "../style.css";
export default function About(){
    return (<>
    {/*
        Not the real instructions, just a placeholder for now.
     */}
    <h2 >How to Use It?</h2>
    <div className="howToUse">
        <ol>
            <li>Sign up or log in to the app.</li>
            <li>Set your daily Quran memorization goals.</li>
            <li>Use the daily plan feature to track your progress.</li>
            <li>Check your overall Quran memorization statistics.</li>
            <li>Utilize the various tools and features to stay motivated and on track.</li>
            <li>Optionally, share your progress with friends and family.</li>
        </ol>
    </div>
    <hr />
    {/* 
     Placeholder for now
     */}
        <div className="about">
    <h2 >About Us</h2>
    <div className="aboutUs">
        <p>This is a simple replica of the <a href="">Tikrar web app</a>, which offers a great course for memorizing the Quran. It is intended for personal use only.</p>
        <p>This website is designed to help users keep track of their Quran memorization progress.</p>
        <p>The website features a daily plan, statistics, and other tools to help users stay on track with their Quran memorization goals.</p>
        <p>The code is open-source and available on <a href="https://github.com/your-username/tikrar-app">GitHub</a>. Feel free to contribute or fork the project.</p>
        <p>If you have any questions or feedback, please don't hesitate to reach out to us at <a href="mailto:info@my-email.com">info@my-email.com</a>.</p>
        <p>Thank you for using our app!</p>
    </div>
    
    
</div>

        </>    
    )
}