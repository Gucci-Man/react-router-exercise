import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className='Nav'>
            <Link to="/dogs">
                Dogs
            </Link>
        </nav>
    )
}

export default Nav;