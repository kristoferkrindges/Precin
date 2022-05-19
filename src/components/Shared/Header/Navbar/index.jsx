import React from "react";
import {Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink } from "./style";


export default function Navbar(){
    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars></Bars>
                <NavMenu>
                    <NavLink to="/about" activeStyle>About</NavLink>
                    <NavLink to="/help" activeStyle>Help</NavLink>
                    <NavLink to="/profile" activeStyle>Profile</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">Sign IN</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
        
    )
}