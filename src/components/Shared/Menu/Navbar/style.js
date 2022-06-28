import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
	background: ${({ theme }) => theme.navbar};
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 11;
	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	padding: 0 24px;
	max-width: 1100px;
`;

export const Linker = styled(LinkR)``;

export const NavLogo = styled(LinkR)`
	color: black;
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	font-weight: bold;
	text-decoration: none;
`;
export const Logo = styled.img`
	cursor: pointer;
	width: 40px;
	margin-right: 20%;
	border: none;
	border-radius: 10px;
	@media screen and (max-width: 1200px) {
		margin-left: 10%;
	}
	@media screen and (max-width: 768px) {
		margin-left: 40%;
	}
`;

export const Title = styled.h1`
	font-size: 20px;
	color: ${({ theme }) => theme.title};
	&:hover {
		color: ${({ theme }) => theme.buttons_hover};
	}
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const MobileIcon = styled.div`
	display: none;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: ${({ theme }) => theme.buttons};
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	width: 100%;
	text-align: center;
	/* margin-right: -22px; */
	padding: 0 5px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLinks = styled(LinkS)`
	color: black;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	&.active {
		border-bottom: 3px solid #01bf71;
	}
	&:hover {
		color: #94449e;
		font-size: 20px;
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	/* margin-left: 5%; */
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: ${({ theme }) => theme.buttons};
	white-space: nowrap;
	padding: 10px 22px;
	color: white;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: ${({ theme }) => theme.buttons_hover};
	}
`;
