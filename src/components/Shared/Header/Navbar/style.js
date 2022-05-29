import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
	/* background: #e8e8e8; */
	background-color: rgba(22, 24, 47, 1);
	height: 80px;
	/* margin-top: -80px; */
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

export const NavSideBar = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 1;
	transform: translate(-100%, 60%);
	font-size: 1.5rem;
	cursor: pointer;
	color: white;
	padding-right: 1%;
	margin-top: 0.5%;

	@media screen and (max-width: 1300px) {
		display: none;
	}
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	/* padding: 0 24px; */
	max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
	color: white;
	justify-self: flex-start;
	cursor: pointer;
	/* font-size: 1.5rem; */
	display: flex;
	align-items: center;
	/* margin-left: 20px; */
	font-weight: bold;
	text-decoration: none;

	img {
		cursor: pointer;
		width: 40px;
		margin-right: 10%;
		border: none;
		border-radius: 5px;

		@media screen and (max-width: 1200px) {
			margin-left: 10%;
		}

		@media screen and (max-width: 768px) {
			margin-left: 40%;
		}
	}

	h1 {
		font-size: 25px;
	}
	h1:hover {
		color: rgba(111, 162, 242, 1);
	}

	@media screen and (max-width: 768px) {
		h1 {
			display: none;
		}
	}
`;

export const MobileIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-70%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
		color: white;
		margin-top: 0.5%;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

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

	@media screen and (max-width: 1200px) {
		padding-right: 1%;
	}

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: rgba(37, 108, 225, 1);
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
		background: white;
		color: black;
		font-size: 20px;
	}
`;
