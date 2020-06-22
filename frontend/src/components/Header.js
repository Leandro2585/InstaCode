import React from 'react';
import StyleHeader from './StyleHeader';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';
export default function Header(){
    return (
        <header id="main-header">
        <StyleHeader/>
            <div className="header-content">
                <Link to="/">
                <img src={logo} alt="InstaCode"/>
                </Link>
                <Link to="/new">
                <img src={camera} alt="Enviar publicação"/>
                </Link>
            </div>
        </header>
    );
}