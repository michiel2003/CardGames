import React from "react";
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "./menu.css";
import './assets/bg.jpg'

// new react component
const Menu = () => {
    return (
        <div>
            <h1>Menu</h1>
            {/* A buttonw with class centered*/}
            <div className="button-container">
                <button className="yellow-button btn">Start</button>
                <button className="yellow-button btn">Options</button>
            </div>
        </div>
    );
}

export default Menu;