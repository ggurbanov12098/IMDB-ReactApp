import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){
    return(
        <div>
        <nav className="nav">
            <NavLink to="/" className="li">Home</NavLink>
            <NavLink to="/movies" className="li">Movies</NavLink>
            <NavLink to="/contactme" className="li">Contact me</NavLink>
            <NavLink to="" className="li about">About</NavLink>
        </nav>
        </div>
    );
}