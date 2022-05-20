import React from "react";
import {Nav, Bars, NavMenu, NavLink, NavBtn, NavBtnLink } from "./style";
import logo from "../../../../imagens/logo.png"


export default function Navbar(){
    return(
        <>
            <Nav>
                <NavLink to="/">
                    <h1><img className="logo" src={logo}></img></h1>
                </NavLink>
                <Bars></Bars>
                <NavMenu>
                    <NavLink to="/about" activeStyle>Sobre</NavLink>
                    <NavLink to="/help" activeStyle>Ajuda</NavLink>
                    <NavLink to="/profile" activeStyle>Perfil</NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">Login</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
        
    )
}