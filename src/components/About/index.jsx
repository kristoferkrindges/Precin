import React from "react";
import Menu from "../Shared/Menu";
import Sidebar from "../Sidebar";
import Suggestion from "../Suggestion";
import {
	Layout,
	Feeder,
	Profile,
	Product,
	Controller,
	User,
	Icon,
	IoCart,
	Logo,
	Name,
	Photo,
	Direction,
	Interaction,
	ButtonPrecin,
	ButtonPrecao,
	ButtonComment,
	NameProduct,
	Register,
	LogoMark,
	Price,
	Buttons,
	HireMe,
	Feeds,
} from "./style";
import logo from "../../imagens/logo.png";
import Tomate from "../../imagens/tomate2.jpg";
import { ThemeProvider } from "styled-components";
import Zaffari from "../../imagens/logo_zaffari.png";
import { Link } from "react-router-dom";
import {
	AiFillLike,
	AiFillDislike,
	AiOutlineShoppingCart,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiCommentDetail } from "react-icons/bi";
// export const item = {
// 	main: "https://firebasestorage.googleapis.com/v0/b/precinauthentication.appspot.com/o/images%2Fproducts%2Fsuco_naturale.jpg6c00bf99-c692-4aa3-9bf2-1da85e5f1017?alt=media&token=4be58518-1078-476a-af85-c428db828327",
// };
function About() {
	return (
		<>
			<Menu type="logado" search="home" />
			<Sidebar></Sidebar>
			<Layout>
				<Controller>
					<Direction>
						<Feeds>
							<Feeder>
								<Profile>
									<User>
										<Logo>
											<img
												src={
													"https://firebasestorage.googleapis.com/v0/b/precinauthentication.appspot.com/o/images%2Fusers%2FNae4TWfJ0oN2e1mJPI9AkMn5sg32?alt=media&token=68c0ab9e-dbbf-44db-8eee-2a30d7fb5277"
												}
											></img>
										</Logo>
										<Name>Kristofer Krindges</Name>
									</User>
									<Icon>
										<IoCart />
									</Icon>
								</Profile>
								<Product>
									{/* <ThemeProvider theme={item}> */}
									<Photo>
										<img
											src={
												"https://firebasestorage.googleapis.com/v0/b/precinauthentication.appspot.com/o/images%2Fproducts%2Fsuco_naturale.jpg6c00bf99-c692-4aa3-9bf2-1da85e5f1017?alt=media&token=4be58518-1078-476a-af85-c428db828327"
											}
										></img>
									</Photo>
									{/* </ThemeProvider> */}
									<NameProduct>Suco Naturale</NameProduct>
									<Register>
										<img src={Zaffari}></img>
										<Price>R$ 7.20</Price>
										<Buttons>
											<HireMe>
												<GoLocation></GoLocation>
											</HireMe>
										</Buttons>
									</Register>
								</Product>
								<Interaction>
									<Link to={"/"}>
										<ButtonPrecin type="button">
											<AiFillLike></AiFillLike>
											Precin
										</ButtonPrecin>
									</Link>
									<Link to={"/"}>
										<ButtonPrecao type="button">
											<AiFillDislike></AiFillDislike>
											Preção
										</ButtonPrecao>
									</Link>
									<Link to={"/"}>
										<ButtonComment type="button">
											<BiCommentDetail></BiCommentDetail>
											Comentários
										</ButtonComment>
									</Link>
								</Interaction>
							</Feeder>
						</Feeds>
						<Suggestion></Suggestion>
					</Direction>
				</Controller>
			</Layout>
		</>
	);
}

export default About;
