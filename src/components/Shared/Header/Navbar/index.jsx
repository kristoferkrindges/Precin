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
	NavSideBar,
} from "./style";
import { FaBars } from "react-icons/fa";
import logo from "../../../../imagens/logo.png";
import SearchBar from "../../../SearchBar";
import FeedData from "../../../../api/feeds.json";

export default function Navbar({ toggle, resp }) {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavSideBar>
						{/* <FaBars></FaBars> */}
					</NavSideBar>
					<NavLogo to="/">
						<img className="logo" src={logo}></img>
						<h1>Precin</h1>
					</NavLogo>
					<SearchBar
						placeholder="Procure por produtos ou mercados"
						data={FeedData}
					/>
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
