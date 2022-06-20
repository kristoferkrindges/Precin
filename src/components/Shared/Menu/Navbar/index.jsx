import React from "react";
import { 
	Nav, 
	NavbarContainer, 
	NavLogo, 
	MobileIcon, 
	NavMenu, 
	NavItem, 
	NavLinks,
	NavBtn,
	NavBtnLink,
	Title,
	Logo,
	Linker,

} from "./style";
import {FaBars} from 'react-icons/fa'
import logo from "../../../../imagens/logo.png";
import SearchBar from "../../../SearchBar";
import FeedData from "../../../../api/feeds.json";

export default function Navbar({toggle, resp, type, search}) {
	let pha
	let route
	if(type=="logado"){
		pha = "Publicar"
		route = "/publication"
	}
	else{
		pha = "Entrar"
		route = "/login"
	}

	if(search=="home"){
		return (
			<>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/">
							<Logo src={logo}></Logo>
							<Title>Precin</Title>
						</NavLogo>
						<SearchBar
								placeholder="Procure por produtos ou mercados"
								data={FeedData}
						/>
						<MobileIcon onClick={toggle}>
							<FaBars></FaBars>
						</MobileIcon>
						<NavBtn>
							<NavBtnLink to={route}>{pha}</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</>
		);
	}
	else{
		return (
			<>
				<Nav>
					<NavbarContainer>
						<NavLogo to="/">
							<Logo src={logo}></Logo>
							<Title>Precin</Title>
						</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars></FaBars>
						</MobileIcon>
						<NavBtn>
							<NavBtnLink to={route}>{pha}</NavBtnLink>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</>
		);
	}
}
