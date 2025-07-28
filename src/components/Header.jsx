import React from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
    return (
        <nav className="navbar bg-dark border-bottom border-body py-3" data-bs-theme="dark">
            <div className="container-fluid justify-content-center">
                <ul className="navbar-nav flex-row gap-4">
                    <li className="nav-item">
                        <NavLink className="nav-link text-light custom-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light custom-link" to="/products">Product</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link text-light custom-link" to="/aboutus">About Us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
