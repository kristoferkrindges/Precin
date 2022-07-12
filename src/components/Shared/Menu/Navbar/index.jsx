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
	Profile,
	ProfileLink,
	Li,
	IoIdCard,
	IoExtensionPuzzle,
	IoCart,
	IoLogOut,
} from "./style";
import { FaBars } from "react-icons/fa";
import logo from "../../../../imagens/logo.png";
import SearchBar from "../../../SearchBar";
import FeedData from "../../../../api/feeds.json";
import { db } from "../../../../firebase/index";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useUserContext } from "../../../../context/userContext";
import { Link } from "react-router-dom";

export default function Navbar({ toggle, resp, type, search }) {
	const { user, logoutUser, photoURL } = useUserContext();
	const [posts, setPosts] = useState([]);
	const postsCollectionRef = query(
		collection(db, "posts"),
		orderBy("timestamp", "desc")
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
	if (user !== null) {
		pha = "Publicar";
		route = "/publication";
	} else {
		pha = "Entrar";
		route = "/login";
	}
	const [hero, setHero] = useState(false);

	function HandlerOpen() {
		if (hero == false) {
			setHero(true);
		} else {
			setHero(false);
		}
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
						<NavMenu>
							<SearchBar
								placeholder="Procure por produtos ou mercados"
								data={posts}
							/>
						</NavMenu>
						<MobileIcon onClick={toggle}>
							<FaBars></FaBars>
						</MobileIcon>
						<NavBtn>
							{/* <NavBtnLink to={route}>{pha}</NavBtnLink> */}
							<Profile>
								<img onClick={HandlerOpen} src={photoURL} alt="" />
								<ProfileLink
									style={hero ? { display: "block" } : { display: "none" }}
								>
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
										<Link to={user ? "" : "/login"}>
											<IoLogOut></IoLogOut> {user ? "Sair" : "Entrar"}
										</Link>
									</Li>
								</ProfileLink>
							</Profile>
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
							{/* <NavBtnLink to={route}>{pha}</NavBtnLink> */}
							<Profile>
								<img onClick={HandlerOpen} src={photoURL} alt="" />
								<ProfileLink
									style={hero ? { display: "block" } : { display: "none" }}
								>
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
										<Link to={user ? "" : "/login"}>
											<IoLogOut></IoLogOut> {user ? "Sair" : "Entrar"}
										</Link>
									</Li>
								</ProfileLink>
							</Profile>
						</NavBtn>
					</NavbarContainer>
				</Nav>
			</>
		);
	}
}
