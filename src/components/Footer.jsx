import React from "react";
import "../style.css";

import { year } from "./Date";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <p>&copy; {year} Made by Me :)</p>
      </div>
    </footer>
  );
}
