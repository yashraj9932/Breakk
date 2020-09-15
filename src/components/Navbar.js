import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar bg-dark">
            <h1>
                <i className="fas fa-flask"></i>{' '}Breaking Bad
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
