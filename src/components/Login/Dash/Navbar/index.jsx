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
} from "./style";
import { Link } from "react-router-dom";
import SearchBar from "../../../SearchBar";
import logo from "../../../../imagens/logo.png";
import { PropaneSharp } from "@mui/icons-material";

const Navbar = (props) => {
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
			<Link to="#" className="nav-link">
				<IoExtensionPuzzle></IoExtensionPuzzle>
				<Badge>5</Badge>
			</Link>
			<Link to="#" className="nav-link">
				<IoNotifications></IoNotifications>
				<Badge>8</Badge>
			</Link>
			<Divider></Divider>
			<Profile>
				<img onClick={HandlerOpen} src={props.img} alt="" />
				<ProfileLink style={hero ? { opacity: "1" } : { opacity: "0" }}>
					<Li>
						<Link to="#">
							<IoCamera></IoCamera> Profile
						</Link>
					</Li>
					<Li>
						<Link to="#">
							<IoCamera></IoCamera> Settings
						</Link>
					</Li>
					<Li>
						<Link to="#">
							<IoCamera></IoCamera> Logout
						</Link>
					</Li>
				</ProfileLink>
			</Profile>
		</Content>
	);
};

export default Navbar;
