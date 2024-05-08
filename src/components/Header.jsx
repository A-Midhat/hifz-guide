import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <h1 className="header">Hifz Guide</h1>
        <div className="header-content">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
