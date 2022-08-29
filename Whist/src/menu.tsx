import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(faGear)

import "./menu.css";
import './assets/bg.jpg'

// new react component
const Menu = () => {
    return (
        <div className="d-flex justify-content-end">
            <h1 className="options">
                {/* use font awesome gear */}
                <FontAwesomeIcon size="xs" icon={['fas', 'gear']} />
            </h1>
            {/* A buttonw with class centered*/}
            <div className="button-container">
                <button className="yellow-button btn">Start</button>
                <button className="yellow-button btn">Options</button>
            </div>
        </div>
    );
}

export default Menu;