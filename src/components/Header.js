import React, { useState } from 'react';
import logo from '../logo.jpg';
import Title from './Title';

const Header = () => {
    const [loginButton, setLoginButton] = useState("Login");

    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={logo} className="logo" alt="logo" />
            </div>
            <Title />
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>AboutUs</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li> <button
                        onClick={() =>
                            loginButton === "Login" ? setLoginButton("Logout") : setLoginButton("Login")}
                    >{loginButton}</button></li>
                </ul>
            </div>
        </div >
    );
};

export default Header;