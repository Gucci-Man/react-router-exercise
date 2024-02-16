import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
    const links = dogs.map(dog => (
        <Link 
            key={dog.name}
            to={`/dooggs/$${dog.name.toLowerCase()}`}
        >
            {dog.name}
        </Link>

    ))
    return (
        <nav className='Nav'>
            <Link to="/dogs">
                Dogs
            </Link>
            {links}
        </nav>
    );
}

export default Nav;