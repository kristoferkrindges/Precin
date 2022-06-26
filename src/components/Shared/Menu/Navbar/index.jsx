import React, { useContext, useState, useEffect } from "react";
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
import { FaBars } from "react-icons/fa";
import logo from "../../../../imagens/logo.png";
import SearchBar from "../../../SearchBar";
import FeedData from "../../../../api/feeds.json";
import { db } from "../../../../firebase/index";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function Navbar({ toggle, resp, type, search }) {
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = query(
		collection(db, "posts"),
		orderBy("date", "desc")
	);

	useEffect(() => {
		const getPosts = async () => {
			const data = await getDocs(postsCollectionRef);
			setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
			// console.log(data);
		};

		getPosts();
	}, []);

	let pha;
	let route;
	if (type == "logado") {
		pha = "Publicar";
		route = "/publication";
	} else {
		pha = "Entrar";
		route = "/login";
	}

	if (search == "home") {
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
							data={posts}
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
	} else {
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
