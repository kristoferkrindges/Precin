import React, { useContext, useState, useEffect } from "react";
import {
	Content,
	FormGroup,
	Profile,
	Badge,
	ProfileLink,
	Li,
	IoCamera,
	IoFacebook,
	Divider,
	IoNotifications,
	IoExtensionPuzzle,
	Precin,
	IoSearch,
	IoIdCard,
	IoCart,
	IoLogOut,
} from "./style";
import { Link } from "react-router-dom";
import SearchBar from "../../../SearchBar";
import logo from "../../../../imagens/logo.png";
import { PropaneSharp } from "@mui/icons-material";
import { useUserContext } from "../../../../context/userContext";

const Navbar = (props) => {
	const { logoutUser } = useUserContext();
	const [hero, setHero] = useState(false);

	function HandlerOpen() {
		if (hero == false) {
			setHero(true);
		} else {
			setHero(false);
		}
	}

	return (
		<Content>
			{/* <IoFacebook></IoFacebook> */}
			{/* <img src={logo} className="logo"></img> */}
			<Precin></Precin>
			{/* <SearchBar></SearchBar> */}
			{/* <form action="#">
				<FormGroup>
					<input type="text" placeholder="Search..." />
					<IoSearch></IoSearch>
				</FormGroup>
			</form> */}
			{/* <Link to="#" className="nav-link">
				<IoExtensionPuzzle></IoExtensionPuzzle>
				<Badge>5</Badge>
			</Link> */}
			<Link to="/" className="nav-link">
				<IoNotifications></IoNotifications>
				<Badge>1</Badge>
			</Link>
			<Divider></Divider>
			<Profile>
				<img onClick={HandlerOpen} src={props.img} alt="" />
				<ProfileLink style={hero ? { display: "block" } : { display: "none" }}>
					<Li>
						<Link to="/login">
							<IoIdCard></IoIdCard> Perfil
						</Link>
					</Li>
					<Li>
						<Link to="/publication">
							<IoExtensionPuzzle></IoExtensionPuzzle> Publicar
						</Link>
					</Li>
					<Li>
						<Link to="/listshop">
							<IoCart></IoCart> Sua lista
						</Link>
					</Li>
					<Li onClick={logoutUser ? logoutUser : ""}>
						<Link to="/">
							<IoLogOut></IoLogOut> Sair
						</Link>
					</Li>
				</ProfileLink>
			</Profile>
		</Content>
	);
};

export default Navbar;
