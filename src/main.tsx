import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar/Navbar";
import NavToggle from "./components/NavToggle/NavToggle";
import PrimaryTextField from "./components/PrimaryTextField/PrimaryTextField";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="grid-container">
      <div className="grid-item"><Navbar /></div>
      <div className="grid-item"><PrimaryTextField /></div>
    </div>
  </React.StrictMode>,
);
