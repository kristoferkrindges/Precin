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
	NavSearchBar,
	NavSideBar,
} from "./style";
import { FaBars, FaSearch } from "react-icons/fa";
import logo from "../../../../imagens/logo.png";

export default function Navbar({ toggle, resp }) {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavSideBar>
						<FaBars></FaBars>
					</NavSideBar>
					<NavLogo to="/">
						<img className="logo" src={logo}></img>
						<h1>Precin</h1>
					</NavLogo>
					<NavSearchBar>
						<input placeholder="Procure por produtos ou mercados"></input>
						<FaSearch className="search" />
					</NavSearchBar>
					<MobileIcon onClick={toggle}>
						<FaBars></FaBars>
					</MobileIcon>
					<NavMenu>
						{/* <NavItem>
							<NavLinks to="/">Home</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/about">Sobre</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks to="/profile">Perfil</NavLinks>
						</NavItem> */}
					</NavMenu>
					<NavBtn>
						<NavBtnLink to="/login">{resp}Entrar</NavBtnLink>
					</NavBtn>
				</NavbarContainer>
			</Nav>
		</>
	);
}
