import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.css';

const Header = () => {
    return(
        <div className="header">
            <ul className="navbar">
                <li>
                   <Link to="/"> Home </Link>
                </li>
                <li>
                <Link to="/favorites"> Favourites </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header;